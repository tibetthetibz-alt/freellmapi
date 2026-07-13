// Migration: seed catalog-only providers with baseline models
// Created: 2025-07-12
//
// DOWN: reversible
//
// Seeds baseline model rows for providers that previously only shipped via the
// freellmapi.co live catalog. These models are confirmed free at time of seeding.

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

  // AINative Studio (api.ainative.studio/api/v1)
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('ainative', 'auto:free', 'AINative Auto (Free)', 5, 5, '',
       60, NULL, NULL, NULL, '10M', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('ainative', 'deepseek-v3-flash', 'DeepSeek V3 Flash', 5, 7, '',
       60, NULL, NULL, NULL, '10M', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  // BazaarLink (bazaarlink.ai/api/v1)
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('bazaarlink', 'auto:free', 'BazaarLink Auto (Free)', 5, 5, '',
       NULL, NULL, NULL, NULL, '', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  // Agnes AI (apihub.agnes-ai.com/v1)
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('agnes', 'agnes-2.0-flash', 'Agnes 2.0 Flash', 5, 6, '',
       NULL, NULL, NULL, NULL, '', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('agnes', 'qwen2.5-72b-instruct', 'Qwen2.5 72B Instruct', 5, 4, '72B',
       NULL, NULL, NULL, NULL, '', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  // Reka (api.reka.ai/v1)
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('reka', 'reka-flash-3', 'Reka Flash 3', 5, 7, '',
       NULL, NULL, NULL, NULL, '', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('reka', 'reka-edge-2603', 'Reka Edge 2603', 4, 8, '',
       NULL, NULL, NULL, NULL, '', 8000, 1, 1, 0, NULL, NULL, NULL)
  `).run();

  // Routeway (api.routeway.ai/v1)
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('routeway', 'deepseek-v4-flash:free', 'DeepSeek V4 Flash (Free)', 6, 7, '',
       5, NULL, NULL, NULL, '', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('routeway', 'qwen3-coder:free', 'Qwen3 Coder (Free)', 5, 7, '',
       5, NULL, NULL, NULL, '', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  // Aion Labs (api.aionlabs.ai/v1)
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('aion', 'deepseek-v3', 'DeepSeek V3', 7, 6, '236B',
       NULL, NULL, NULL, NULL, '', 64000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('aion', 'mistral-large', 'Mistral Large', 6, 5, '123B',
       NULL, NULL, NULL, NULL, '', 128000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  // Requesty (router.requesty.ai/v1)
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('requesty', 'auto:free', 'Requesty Auto (Free)', 5, 5, '',
       NULL, NULL, NULL, NULL, '', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('requesty', 'qwen3-coder', 'Qwen3 Coder', 5, 7, '',
       NULL, NULL, NULL, NULL, '', 32000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  // NaraRouter (router.bynara.id/v1)
  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('nara', 'mistral-large', 'Mistral Large', 6, 5, '123B',
       NULL, NULL, NULL, NULL, '', 128000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  db.prepare(`
    INSERT OR IGNORE INTO models
      (platform, model_id, display_name, intelligence_rank, speed_rank, size_label,
       rpm_limit, rpd_limit, tpm_limit, tpd_limit, monthly_token_budget,
       context_window, enabled, supports_vision, supports_tools, key_id, paid_input_per_m, paid_output_per_m)
    VALUES
      ('nara', 'mistral-medium-3.5', 'Mistral Medium 3.5', 5, 6, '',
       NULL, NULL, NULL, NULL, '', 128000, 1, 0, 1, NULL, NULL, NULL)
  `).run();

  // Ensure fallback_config rows for all these
  const insertFallback = db.prepare(`INSERT OR IGNORE INTO fallback_config (model_db_id, priority, enabled)
    SELECT m.id, (SELECT COALESCE(MAX(priority), 0) + 1 FROM fallback_config), 1
    FROM models m
    WHERE m.platform = ? AND m.model_id = ?
  `);

  // SiliconFlow
  insertFallback.run('siliconflow', 'deepseek-ai/DeepSeek-V3-0324');
  insertFallback.run('siliconflow', 'deepseek-ai/DeepSeek-V2.5');
  insertFallback.run('siliconflow', 'Qwen/Qwen2.5-72B-Instruct');
  insertFallback.run('siliconflow', 'THUDM/glm-4-9b-chat');
  // AINative
  insertFallback.run('ainative', 'auto:free');
  insertFallback.run('ainative', 'deepseek-v3-flash');
  // BazaarLink
  insertFallback.run('bazaarlink', 'auto:free');
  // Agnes
  insertFallback.run('agnes', 'agnes-2.0-flash');
  insertFallback.run('agnes', 'qwen2.5-72b-instruct');
  // Reka
  insertFallback.run('reka', 'reka-flash-3');
  insertFallback.run('reka', 'reka-edge-2603');
  // Routeway
  insertFallback.run('routeway', 'deepseek-v4-flash:free');
  insertFallback.run('routeway', 'qwen3-coder:free');
  // Aion
  insertFallback.run('aion', 'deepseek-v3');
  insertFallback.run('aion', 'mistral-large');
  // Requesty
  insertFallback.run('requesty', 'auto:free');
  insertFallback.run('requesty', 'qwen3-coder');
  // Nara
  insertFallback.run('nara', 'mistral-large');
  insertFallback.run('nara', 'mistral-medium-3.5');
}

export function down(db: Db): void {
  const deleteModels = (db: Db, platform: string) => {
    db.prepare(`DELETE FROM fallback_config WHERE model_db_id IN (SELECT id FROM models WHERE platform = ?)`).run(platform);
    db.prepare(`DELETE FROM models WHERE platform = ?`).run(platform);
  };
  deleteModels(db, 'siliconflow');
  deleteModels(db, 'ainative');
  deleteModels(db, 'bazaarlink');
  deleteModels(db, 'agnes');
  deleteModels(db, 'reka');
  deleteModels(db, 'routeway');
  deleteModels(db, 'aion');
  deleteModels(db, 'requesty');
  deleteModels(db, 'nara');
}