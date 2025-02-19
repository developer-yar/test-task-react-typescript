import { FC } from "react";
import { createRoot } from "react-dom/client";
import { FormComponent } from "@components/form-component/form-component";
import "@assets/styles/main.scss";

const App: FC = () => <FormComponent />;

const root: HTMLElement | null = document.getElementById("app");
root && createRoot(root).render(<App />);
