export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;

  // If your API sends an error format like { message: "Something went wrong" }
  if (typeof error === "object" && error !== null && "message" in error) {
    return String((error as { message: unknown }).message);
  }

  // If the string is normal
  if (typeof error === "string") return error;

  return "An unexpected error occurred";
};
