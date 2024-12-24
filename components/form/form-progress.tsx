"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useFormNavigation } from "@/lib/hooks/useFormNavigation";

export function FormProgress() {
  const { currentStep, goToStep } = useFormNavigation();
  const progress = ((currentStep - 1) / 3) * 100;
  const steps = [1, 2, 3, 4];

  return (
    <div className="space-y-4">
      <Progress value={progress} className="w-full" />
      <div className="flex justify-center gap-4">
        {steps.map((step) => (
          <Button
            key={step}
            variant={step === currentStep ? "default" : "outline"}
            className="w-8 h-8 rounded-full p-0"
            onClick={() => goToStep(step)}
          >
            {step}
          </Button>
        ))}
      </div>
    </div>
  );
}