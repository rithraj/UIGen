export default {
  type: "object",
  required: ["prompt"],
  properties: {
    prompt: { type: "string", description: "Natural language UI description" },
    imageData: { type: "string", description: "Base64‑encoded image", nullable: true },
    layoutJson: { type: "object", description: "Structured UI layout", nullable: true }
  }
} as const;
