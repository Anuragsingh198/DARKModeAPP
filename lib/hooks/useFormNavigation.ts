"use client";

import { useFormStore } from '@/lib/store';

export function useFormNavigation() {
  const { formData, setFormData } = useFormStore();

  const goToStep = (step: number) => {
    setFormData({ currentStep: step });
  };

  const goToNextStep = () => {
    if (formData.currentStep < 4) {
      setFormData({ currentStep: formData.currentStep + 1 });
    }
  };

  const goToPreviousStep = () => {
    if (formData.currentStep > 1) {
      setFormData({ currentStep: formData.currentStep - 1 });
    }
  };

  return {
    currentStep: formData.currentStep,
    goToStep,
    goToNextStep,
    goToPreviousStep,
    isFirstStep: formData.currentStep === 1,
    isLastStep: formData.currentStep === 4,
  };
}