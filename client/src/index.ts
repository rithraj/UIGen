import { MCPServer, createJsonSchemaTool } from "@anthropic-ai/mcp-js";
import schema from "./schema.js";

const server = new MCPServer();

// Register UIGen tool with MCP
server.registerTool(
  createJsonSchemaTool({
    name: "ui-gen",
    description: "Generate React UI code from prompts or images",
    inputSchema: schema,
    handler: async (input) => {
      // TODO: Call the FastAPI backend
      console.log("UI Gen tool received:", input);
      return { success: false, message: "Not yet implemented" };
    }
  })
);

server.start();
