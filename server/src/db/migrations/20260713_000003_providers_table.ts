// Migration: add providers table and insert default providers
// Created: 2026-07-13
//
// DOWN: reversible

import type { Db } from '../types.js';

export function up(db: Db): void {
  // Create the providers table
  db.prepare(`
    CREATE TABLE IF NOT EXISTS providers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      base_url TEXT NOT NULL,
      api_key_env_var TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `).run();

  // Insert default providers (if they don't already exist)
  const insertProvider = db.prepare(`
    INSERT OR IGNORE INTO providers (name, base_url, api_key_env_var)
    VALUES (?, ?, ?)
  `);

  // SiliconFlow
  insertProvider.run('SiliconFlow', 'https://api.siliconflow.com/v1', 'SILICONFLOW_API_KEY');
  // AINative Studio
  insertProvider.run('AINative Studio', 'https://api.ainative.studio/api/v1', 'AINATIVE_API_KEY');
  // BazaarLink
  insertProvider.run('BazaarLink', 'https://bazaarlink.ai/api/v1', 'BAZAARLINK_API_KEY');
  // Agnes AI
  insertProvider.run('Agnes AI', 'https://apihub.agnes-ai.com/v1', 'AGNES_API_KEY');
  // Reka
  insertProvider.run('Reka', 'https://api.reka.ai/v1', 'REKA_API_KEY');
  // Routeway
  insertProvider.run('Routeway', 'https://api.routeway.ai/v1', 'ROUTEWAY_API_KEY');
  // Aion Labs
  insertProvider.run('Aion Labs', 'https://api.aionlabs.ai/v1', 'AION_API_KEY');
  // Requesty
  insertProvider.run('Requesty', 'https://router.requesty.ai/v1', 'REQUESTY_API_KEY');
  // NaraRouter
  insertProvider.run('NaraRouter', 'https://router.bynara.id/v1', 'NARAROUTER_API_KEY');
  // Zhipu AI
  insertProvider.run('Zhipu AI', 'https://open.bigmodel.cn/api/paas/v4', 'ZHIPU_API_KEY');
  // Moonshot
  insertProvider.run('Moonshot', 'https://api.moonshot.cn/v1', 'MOONSHOT_API_KEY');
  // MiniMax
  insertProvider.run('MiniMax', 'https://api.minimax.io/v1', 'MINIMAX_API_KEY');
  // Cerebras
  insertProvider.run('Cerebras', 'https://api.cerebras.ai/v1', 'CEREBRAS_API_KEY');
  // Cloudflare Workers AI
  insertProvider.run('Cloudflare Workers AI', 'https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/', 'CLOUDFLARE_API_TOKEN');
  // Cohere
  insertProvider.run('Cohere', 'https://api.cohere.ai/v2', 'COHERE_API_KEY');
  // GitHub Models
  insertProvider.run('GitHub Models', 'https://models.github.ai/inference', 'GITHUB_TOKEN');
  // Google AI Studio
  insertProvider.run('Google AI Studio', 'https://generativelanguage.googleapis.com/v1beta/', 'GOOGLE_API_KEY');
  // Groq
  insertProvider.run('Groq', 'https://api.groq.com/openai/v1', 'GROQ_API_KEY');
  // Hugging Face Inference API
  insertProvider.run('HuggingFace Inference API', 'https://api-inference.huggingface.co/models/', 'HF_API_KEY');
  // LLMLike
  // Note: LLMLike is a custom provider, so we don't insert a default row here.
  // Ollama Cloud
  insertProvider.run('Ollama Cloud', 'https://ollama.com/v1', '');
  // OpenCode Zen
  insertProvider.run('OpenCode Zen', 'https://opencode.ai/zen/v1', 'OPENCODE_API_KEY');
  // OVHcloud AI Endpoints
  insertProvider.run('OVHcloud AI Endpoints', 'https://oai.endpoints.kepler.ai.cloud.ovh.net/v1', 'OVH_API_KEY');
  // Pollinations
  insertProvider.run('Pollinations', 'https://text.pollinations.ai/openai/v1', '');
  // LLM7.io
  insertProvider.run('LLM7', 'https://api.llm7.io/v1', 'LLM7_API_KEY');
}

export function down(db: Db): void {
  db.prepare('DROP TABLE IF EXISTS providers').run();
}