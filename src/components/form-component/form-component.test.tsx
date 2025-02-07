import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { FormComponent } from "./form-component";

describe("FormComponent", () => {
  test("renders form fields", () => {
    render(<FormComponent />);

    expect(screen.getByLabelText(/Имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Возраст/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Проверить данные/i }),
    ).toBeInTheDocument();
  });

  test("submits form with invalid data", async () => {
    render(<FormComponent />);

    fireEvent.change(screen.getByLabelText(/Имя/i), {
      target: { value: "Иван " },
    });
    fireEvent.change(screen.getByLabelText(/Возраст/i), {
      target: { value: "0" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "ivan@example.com " },
    });

    fireEvent.click(screen.getByRole("button", { name: /Проверить данные/i }));

    expect(
      await screen.findByText(/Имя должно состоять только из букв/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Возраст должен быть положительным числом/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Некорректный формат email/i),
    ).toBeInTheDocument();
  });

  test("submits form with valid data", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<FormComponent />);

    fireEvent.change(screen.getByLabelText(/Имя/i), {
      target: { value: "Иван" },
    });
    fireEvent.change(screen.getByLabelText(/Возраст/i), {
      target: { value: "25" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "ivan@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Проверить данные/i }));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("Имя: Иван"),
      );
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("Возраст: 25"),
      );
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("Email: ivan@example.com"),
      );
    });
  });
});
