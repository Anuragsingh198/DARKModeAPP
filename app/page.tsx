"use client";

import { useSpring, animated } from "@react-spring/web";
import { Card } from "@/components/ui/card";
import { FormProgress } from "@/components/form/form-progress";
import { FormNavigation } from "@/components/form/form-navigation";
import PersonalInfo from "@/components/steps/personal-info";
import AddressDetails from "@/components/steps/address-details";
import Preferences from "@/components/steps/preferences";
import Review from "@/components/steps/review";
import { useFormNavigation } from "@/lib/hooks/useFormNavigation";

export default function Home() {
  const { currentStep } = useFormNavigation();

  const steps = [
    { id: 1, component: PersonalInfo },
    { id: 2, component: AddressDetails },
    { id: 3, component: Preferences },
    { id: 4, component: Review },
  ];

  const CurrentStepComponent = steps.find((step) => step.id === currentStep)?.component || PersonalInfo;

  // Animation for step transition
  const animationStyles = useSpring({
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(20px)" },
    config: { duration: 300 },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-center">Multi-Step Form</h1>
          <p className="text-muted-foreground text-center">
            Please fill out all the required information
          </p>
        </div>

        <FormProgress />
        <animated.div style={animationStyles}>
          <Card className="p-6">
            <CurrentStepComponent />
          </Card>
        </animated.div>

        <FormNavigation />
      </div>
    </div>
  );
}
