export const formatCurrency = (value, isCompact) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    notation: isCompact ? "compact" : "standard",
  }).format(value);
};
