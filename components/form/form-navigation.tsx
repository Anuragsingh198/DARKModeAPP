"use client";

import { Button } from "@/components/ui/button";
import { useFormNavigation } from "@/lib/hooks/useFormNavigation";

export function FormNavigation() {
  const { goToNextStep, goToPreviousStep, isFirstStep, isLastStep } = useFormNavigation();

  return (
    <div className="flex justify-between">
      <Button
        variant="outline"
        onClick={goToPreviousStep}
        disabled={isFirstStep}
      >
        Previous
      </Button>
      <Button
        onClick={goToNextStep}
        disabled={isLastStep}
      >
        {isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
}