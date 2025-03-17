"use client";
import { useEffect } from "react";

export const IntakeQWidget = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://intakeq.com/js/widget.min.js?1";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="intakeq" style={{ maxWidth: "720px", width: "100%" }} />;
};

