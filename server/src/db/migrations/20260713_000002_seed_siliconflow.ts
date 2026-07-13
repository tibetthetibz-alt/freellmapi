// Migration: seed siliconflow models
// Created: 2026-07-13
//

import type { Db } from '../types.js';

export function up(db: Db): void {
  // SiliconFlow (api.siliconflow.com/v1) — FLUX image gen and DeepSeek chat
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('siliconflow', 'deepseek-ai/DeepSeek-V3-0324', 'DeepSeek V3', 7, 6, '70B',
       NULL, NULL, NULL, NULL, '', 64000, 1, 0, 1, NULL, NULL, NULL)
  `).run();
 
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('siliconflow', 'deepseek-ai/DeepSeek-V2.5', 'DeepSeek V2.5', 6, 6, '236B',
       NULL, NULL, NULL, NULL, '', 128000, 1, 0, 1, NULL, NULL, NULL)
  `).run();
 
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('siliconflow', 'Qwen/Qwen2.5-72B-Instruct', 'Qwen2.5 72B', 5, 4, '72B',
       NULL, NULL, NULL, NULL, '', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();
 
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('siliconflow', 'THUDM/glm-4-9b-chat', 'GLM-4 9B', 4, 7, '9B',
       NULL, NULL, NULL, NULL, '', 128000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  // Ensure fallback_config rows for these models
  const insertFallback = db.prepare(`INSERT OR IGNORE INTO fallback_config (model_db_id, priority, enabled)
    SELECT m.id, (SELECT COALESCE(MAX(priority), 0) + 1 FROM fallback_config), 1
    FROM models m
    WHERE m.platform = ? AND m.model_id = ?`);

  // SiliconFlow
  insertFallback.run('siliconflow', 'deepseek-ai/DeepSeek-V3-0324');
  insertFallback.run('siliconflow', 'deepseek-ai/DeepSeek-V2.5');
  insertFallback.run('siliconflow', 'Qwen/Qwen2.5-72B-Instruct');
  insertFallback.run('siliconflow', 'THUDM/glm-4-9b-chat');
}

export function down(db: Db): void {
  // Remove siliconflow models and their fallback config entries
  db.prepare(`DELETE FROM fallback_config WHERE model_db_id IN (SELECT id FROM models WHERE platform = 'siliconflow')`).run();
  db.prepare(`DELETE FROM models WHERE platform = 'siliconflow'`).run();
}