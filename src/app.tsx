import { createRoot } from "react-dom/client";
import { FormComponent } from "@components/form-component/form-component";
import "@assets/styles/main.scss";

const App: React.FC = () => <FormComponent />;

const root: HTMLElement | null = document.getElementById("app");
root && createRoot(root).render(<App />);
