export const getSkipDescription = (skipSize) => {
  const sizeDescriptions = {
    4: "Perfect for small home renovations and garden clearance projects",
    6: "Ideal for medium-sized projects and home cleanouts",
    8: "Great for larger renovation projects and major clearances",
    10: "Suitable for commercial projects and large construction waste",
    12: "Best for major construction projects and industrial waste",
    14: "Designed for large industrial projects with substantial waste",
    16: "Optimal for extensive demolition projects and large site clearances",
    20: "Industrial-grade skip for major construction and demolition projects",
    40: "Maximum capacity roll-on/roll-off container for industrial use"
  };
  const baseDescription = sizeDescriptions[skipSize] || "Suitable for various waste disposal needs";

  return baseDescription;
};

export const getSkipFeatures = (skip) => {
  const baseFeatures = [
    `${skip.hire_period_days}-days hire period included`,
    "Free delivery and collection",
    `Capacity equivalent to approximately ${skip.size * 10} bin bags`
  ];

  if (skip.allowed_on_road) {
    baseFeatures.push("Can be placed on public roads");
  } else {
    baseFeatures.push("Private property placement only");
  }

  if (skip.allows_heavy_waste) {
    baseFeatures.push("Suitable for heavy construction waste");
  }

  return baseFeatures;
};