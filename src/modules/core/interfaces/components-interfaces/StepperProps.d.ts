interface Step {
  label: string;
  to: string;
}

interface StepperProps {
  steps: Step[];
}

export type { Step, StepperProps };
