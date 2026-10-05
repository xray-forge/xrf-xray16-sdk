/**
 * Console commands the engine registers, by name: `xray-16`'s `CMD1`-`CMD4` and `CMD_RADIOGROUPMASK2` registrations
 * across the engine, game and renderer modules. A command registered only in some builds says so; check
 * `isConsoleCommandAvailable()` before relying on one at runtime.
 *
 * Generated from the engine sources; regenerate it after an engine adds or removes commands.
 *
 * todo: Brief description for each command.
 *
 * @inline
 */
export const consoleCommands = {
  /**
   * Command, handled by `CCC_Preset`.
   */
  _preset: "_preset",
  /**
   * Number from 0 to `10.f * PI`.
   */
  ai_aim_max_angle: "ai_aim_max_angle",
  /**
   * Number from 0 to `10.f * PI`.
   */
  ai_aim_min_angle: "ai_aim_min_angle",
  /**
   * Number from 0 to `10.f * PI`.
   */
  ai_aim_min_speed: "ai_aim_min_speed",
  /**
   * Number from 0 to 10.
   */
  ai_aim_predict_time: "ai_aim_predict_time",
  /**
   * Integer from 0 to 1.
   */
  ai_aim_use_smooth_aim: "ai_aim_use_smooth_aim",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_animation_stats: "ai_animation_stats",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_alife: "ai_dbg_alife",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_anim: "ai_dbg_anim",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_brain: "ai_dbg_brain",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_cover: "ai_dbg_cover",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_destroy: "ai_dbg_destroy",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_dialogs: "ai_dbg_dialogs",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_frustum: "ai_dbg_frustum",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_funcs: "ai_dbg_funcs",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_goap: "ai_dbg_goap",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_goap_object: "ai_dbg_goap_object",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_goap_script: "ai_dbg_goap_script",
  /**
   * Integer from 0 to 1000000.
   * Debug and Mixed builds only.
   */
  ai_dbg_inactive_time: "ai_dbg_inactive_time",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_infoportion: "ai_dbg_infoportion",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_monster: "ai_dbg_monster",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_motion: "ai_dbg_motion",
  /**
   * Command, handled by `CCC_DebugNode`.
   * Debug and Mixed builds only.
   */
  ai_dbg_node: "ai_dbg_node",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_serialize: "ai_dbg_serialize",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ai_dbg_sight: "ai_dbg_sight",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_stalker: "ai_dbg_stalker",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_vision: "ai_dbg_vision",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_debug: "ai_debug",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ai_debug_doors: "ai_debug_doors",
  /**
   * Integer from 0 to 1.
   */
  ai_die_in_anomaly: "ai_die_in_anomaly",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph: "ai_draw_game_graph",
  /**
   * Command, handled by `CCC_DrawGameGraphAll`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_all: "ai_draw_game_graph_all",
  /**
   * Command, handled by `CCC_DrawGameGraphCurrent`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_current_level: "ai_draw_game_graph_current_level",
  /**
   * Command, handled by `CCC_DrawGameGraphLevel`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_level: "ai_draw_game_graph_level",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_objects: "ai_draw_game_graph_objects",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_real_pos: "ai_draw_game_graph_real_pos",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_stalkers: "ai_draw_game_graph_stalkers",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_visibility_rays: "ai_draw_visibility_rays",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_ignore_actor: "ai_ignore_actor",
  /**
   * Command, handled by `CCC_ShowMonsterInfo`.
   * Debug and Mixed builds only.
   */
  ai_monster_info: "ai_monster_info",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_obstacles_avoiding: "ai_obstacles_avoiding",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_obstacles_avoiding_static: "ai_obstacles_avoiding_static",
  /**
   * Command, handled by `CCC_ShowAnimationStats`.
   * Debug and Mixed builds only.
   */
  ai_show_animation_stats: "ai_show_animation_stats",
  /**
   * Number from 0.1 to 10.
   * Debug and Mixed builds only.
   */
  ai_smart_cover_animation_speed_factor: "ai_smart_cover_animation_speed_factor",
  /**
   * Number from 0 to 1000000.
   * Not in gold builds.
   */
  ai_smart_factor: "ai_smart_factor",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_stats: "ai_stats",
  /**
   * Integer from 0 to 1.
   */
  ai_use_old_vision: "ai_use_old_vision",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_use_smart_covers: "ai_use_smart_covers",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_use_smart_covers_animation_slots: "ai_use_smart_covers_animation_slots",
  /**
   * Toggle, `on` or `off`.
   */
  ai_use_torch_dynamic_lights: "ai_use_torch_dynamic_lights",
  /**
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  air_resistance_epsilon: "air_resistance_epsilon",
  /**
   * Command, handled by `CCC_ALifeObjectsPerUpdate`.
   * Not in gold builds.
   */
  al_objects_per_update: "al_objects_per_update",
  /**
   * Command, handled by `CCC_ALifePath`.
   * Debug and Mixed builds only.
   */
  al_path: "al_path",
  /**
   * Command, handled by `CCC_ALifeProcessTime`.
   * Not in gold builds.
   */
  al_process_time: "al_process_time",
  /**
   * Command, handled by `CCC_ALifeSwitchDistance`.
   * Not in gold builds.
   */
  al_switch_distance: "al_switch_distance",
  /**
   * Command, handled by `CCC_ALifeSwitchFactor`.
   * Not in gold builds.
   */
  al_switch_factor: "al_switch_factor",
  /**
   * Command, handled by `CCC_ALifeTimeFactor`.
   * Not in gold builds.
   */
  al_time_factor: "al_time_factor",
  /**
   * Command, handled by `CCC_Bind`.
   */
  bind: "bind",
  /**
   * Command, handled by `CCC_BindConsoleCmd`.
   */
  bind_console: "bind_console",
  /**
   * Command, handled by `CCC_Bind`.
   */
  bind_gpad: "bind_gpad",
  /**
   * Command, handled by `CCC_BindList`.
   */
  bind_list: "bind_list",
  /**
   * Command, handled by `CCC_Bind`.
   */
  bind_sec: "bind_sec",
  /**
   * Command, handled by `CCC_BuildSSA`.
   * Debug and Mixed builds only, renderers other than R1 only.
   */
  build_ssa: "build_ssa",
  /**
   * Number from 0 to 1.
   */
  cam_inert: "cam_inert",
  /**
   * Number from 0 to 1.
   */
  cam_slide_inert: "cam_slide_inert",
  /**
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  camera_collision_character_shift_z: "camera_collision_character_shift_z",
  /**
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  camera_collision_character_skin_depth: "camera_collision_character_skin_depth",
  /**
   * Command, handled by `CCC_GSCDKey`.
   * Multiplayer.
   */
  cdkey: "cdkey",
  /**
   * Command, handled by `CCC_LoadCFG`.
   */
  cfg_load: "cfg_load",
  /**
   * Save options changes.
   */
  cfg_save: "cfg_save",
  /**
   * Command, handled by `CCC_SvChat`.
   * Multiplayer.
   */
  chat: "chat",
  /**
   * Check game updates.
   */
  check_for_updates: "check_for_updates",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  cl_cod_pickup_mode: "cl_cod_pickup_mode",
  /**
   * Integer from 0 to 1000.
   * Multiplayer; Debug and Mixed builds only.
   */
  cl_dbg_max_ping: "cl_dbg_max_ping",
  /**
   * Integer from 0 to 1000.
   * Multiplayer; Debug and Mixed builds only.
   */
  cl_dbg_min_ping: "cl_dbg_min_ping",
  /**
   * Toggle, `on` or `off`.
   */
  cl_dynamiccrosshair: "cl_dynamiccrosshair",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  cl_mpdemosave: "cl_mpdemosave",
  /**
   * Vote No.
   * Multiplayer.
   */
  cl_voteno: "cl_voteno",
  /**
   * Starts Voting.
   * Multiplayer.
   */
  cl_votestart: "cl_votestart",
  /**
   * Vote Yes.
   * Multiplayer.
   */
  cl_voteyes: "cl_voteyes",
  /**
   * Command, handled by `CCC_ClearLog`.
   */
  clear_log: "clear_log",
  /**
   * Command, handled by `CCC_ClearSmartCastStats`.
   * Debug and Mixed builds only.
   */
  clear_smart_cast_stats: "clear_smart_cast_stats",
  /**
   * Number from 0.01 to 1.
   */
  con_sensitive: "con_sensitive",
  /**
   * Make config dump of each player in the game. Format: \"config_dump_all.
   * Multiplayer.
   */
  config_dump_all: "config_dump_all",
  /**
   * Command, handled by `CCC_Crash`.
   * Debug and Mixed builds only.
   */
  crash: "crash",
  /**
   * Allows to change bind rotation and position offsets for attached item, <section_name> given as arguments.
   * Debug and Mixed builds only.
   */
  dbg_adjust_attachable_item: "dbg_adjust_attachable_item",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_bones_snd_player: "dbg_bones_snd_player",
  /**
   * Command, handled by `CCC_CleanupTasks`.
   */
  dbg_cleanup_tasks: "dbg_cleanup_tasks",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_destroy: "dbg_destroy",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_actor_alive: "dbg_draw_actor_alive",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_actor_dead: "dbg_draw_actor_dead",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_actor_phys: "dbg_draw_actor_phys",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_animation_movement_controller: "dbg_draw_animation_movement_controller",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_autopickupbox: "dbg_draw_autopickupbox",
  /**
   * Command, handled by `CCC_DbgBullets`.
   * Debug and Mixed builds only.
   */
  dbg_draw_bullet_hit: "dbg_draw_bullet_hit",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_camera_collision: "dbg_draw_camera_collision",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_car_plots_all_trans: "dbg_draw_car_plots_all_trans",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_character_binds: "dbg_draw_character_binds",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_character_bones: "dbg_draw_character_bones",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_character_physics: "dbg_draw_character_physics",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_character_physics_pones: "dbg_draw_character_physics_pones",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_climbable: "dbg_draw_climbable",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_customdetector: "dbg_draw_customdetector",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_customzone: "dbg_draw_customzone",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_doors: "dbg_draw_doors",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_fb_crosshair: "dbg_draw_fb_crosshair",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_invitem: "dbg_draw_invitem",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_car_dynamics: "dbg_draw_ph_car_dynamics",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_car_plots: "dbg_draw_ph_car_plots",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_cashed_tries_stats: "dbg_draw_ph_cashed_tries_stats",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_contacts: "dbg_draw_ph_contacts",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_death_boxes: "dbg_draw_ph_death_boxes",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_enabled_aabbs: "dbg_draw_ph_enabled_aabbs",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_explosion_position: "dbg_draw_ph_explosion_position",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_explosions: "dbg_draw_ph_explosions",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_hit_anims: "dbg_draw_ph_hit_anims",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_hit_app_pos: "dbg_draw_ph_hit_app_pos",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_blending: "dbg_draw_ph_ik_blending",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_collision: "dbg_draw_ph_ik_collision",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_goal: "dbg_draw_ph_ik_goal",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_limits: "dbg_draw_ph_ik_limits",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_predict: "dbg_draw_ph_ik_predict",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_shift_object: "dbg_draw_ph_ik_shift_object",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_intersected_tries: "dbg_draw_ph_intersected_tries",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_mass_centres: "dbg_draw_ph_mass_centres",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_negative_tries: "dbg_draw_ph_negative_tries",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_positive_tries: "dbg_draw_ph_positive_tries",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ray_motions: "dbg_draw_ph_ray_motions",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_saved_tries: "dbg_draw_ph_saved_tries",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_statistics: "dbg_draw_ph_statistics",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_tri_point: "dbg_draw_ph_tri_point",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_tri_test_aabb: "dbg_draw_ph_tri_test_aabb",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_tri_trace: "dbg_draw_ph_tri_trace",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_tries_changes_sign: "dbg_draw_ph_tries_changes_sign",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_zbuffer_disable: "dbg_draw_ph_zbuffer_disable",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_ragdoll_spawn: "dbg_draw_ragdoll_spawn",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_rp: "dbg_draw_rp",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_skeleton: "dbg_draw_skeleton",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_teamzone: "dbg_draw_teamzone",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_dump_physics_step: "dbg_dump_physics_step",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_imotion_collide_debug: "dbg_imotion_collide_debug",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_imotion_draw_skeleton: "dbg_imotion_draw_skeleton",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_imotion_draw_velocity: "dbg_imotion_draw_velocity",
  /**
   * Number from 0.0001 to 100.
   * Debug and Mixed builds only.
   */
  dbg_imotion_draw_velocity_scale: "dbg_imotion_draw_velocity_scale",
  /**
   * Command, handled by `CCC_DbgMakeScreenshot`.
   * Multiplayer; Debug and Mixed builds only.
   */
  dbg_make_screenshot: "dbg_make_screenshot",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_actor_restriction: "dbg_ph_actor_restriction",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ai_always_phmove: "dbg_ph_ai_always_phmove",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ai_never_phmove: "dbg_ph_ai_never_phmove",
  /**
   * Command, handled by `CCC_DBGDrawCashedClear`.
   * Debug and Mixed builds only.
   */
  dbg_ph_cashed_clear: "dbg_ph_cashed_clear",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_character_control: "dbg_ph_character_control",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ik: "dbg_ph_ik",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ik_limits: "dbg_ph_ik_limits",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ik_off: "dbg_ph_ik_off",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ladder: "dbg_ph_ladder",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_obj_collision_damage: "dbg_ph_obj_collision_damage",
  /**
   * Number from 0 to 1000.
   * Debug and Mixed builds only.
   */
  dbg_ph_vel_collid_damage_to_display: "dbg_ph_vel_collid_damage_to_display",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_show_ani_info: "dbg_show_ani_info",
  /**
   * Command, handled by `CCC_DbgStrCheck`.
   * Debug and Mixed builds only.
   */
  dbg_str_check: "dbg_str_check",
  /**
   * Command, handled by `CCC_DbgStrDump`.
   * Debug and Mixed builds only.
   */
  dbg_str_dump: "dbg_str_dump",
  /**
   * Number from 0.2 to 5.
   * Debug and Mixed builds only.
   */
  dbg_text_height_scale: "dbg_text_height_scale",
  /**
   * Restart game fast.
   * Debug and Mixed builds only.
   */
  dbg_track_obj: "dbg_track_obj",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_ammount: "dbg_track_obj_blends_ammount",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_bp_0: "dbg_track_obj_blends_bp_0",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_bp_1: "dbg_track_obj_blends_bp_1",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_bp_2: "dbg_track_obj_blends_bp_2",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_bp_3: "dbg_track_obj_blends_bp_3",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_dump: "dbg_track_obj_blends_dump",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_flags: "dbg_track_obj_blends_flags",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_mix_params: "dbg_track_obj_blends_mix_params",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_motion_name: "dbg_track_obj_blends_motion_name",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_state: "dbg_track_obj_blends_state",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_time: "dbg_track_obj_blends_time",
  /**
   * Command, handled by `CCC_DbgVar`.
   * Debug and Mixed builds only.
   */
  dbg_var: "dbg_var",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  death_anim_debug: "death_anim_debug",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  death_anim_velocity: "death_anim_velocity",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_character_material_load: "debug_character_material_load",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_destroy: "debug_destroy",
  /**
   * Command, handled by `CCC_DumpModelBones`.
   * Debug and Mixed builds only.
   */
  debug_dump_model_bones: "debug_dump_model_bones",
  /**
   * Command, handled by `CCC_DebugFonts`.
   * Debug and Mixed builds only.
   */
  debug_fonts: "debug_fonts",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_show_red_text: "debug_show_red_text",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_step_info: "debug_step_info",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_step_info_load: "debug_step_info_load",
  /**
   * Command, handled by `CCC_DefControls`.
   */
  default_controls: "default_controls",
  /**
   * Command, handled by `CCC_DemoPlay`.
   */
  demo_play: "demo_play",
  /**
   * Command, handled by `CCC_DemoRecord`.
   */
  demo_record: "demo_record",
  /**
   * Command, handled by `CCC_DemoRecordSetPos`.
   */
  demo_set_cam_position: "demo_set_cam_position",
  /**
   * Integer from 0 to 1.
   */
  disable_lens_flare: "disable_lens_flare",
  /**
   * Disconnect from server / game session.
   */
  disconnect: "disconnect",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  draw_downloads: "draw_downloads",
  /**
   * Command, handled by `CCC_DumpObjects`.
   * Debug and Mixed builds only.
   */
  dump_all_objects: "dump_all_objects",
  /**
   * Dumps all creature names.
   * Debug and Mixed builds only.
   */
  dump_creatures: "dump_creatures",
  /**
   * Dumps all infoportions that actor have.
   * Debug and Mixed builds only.
   */
  dump_infos: "dump_infos",
  /**
   * Dumps all currentmap locations.
   * Debug and Mixed builds only.
   */
  dump_map: "dump_map",
  /**
   * Command, handled by `CCC_DumpOpenFiles`.
   * Debug and Mixed builds only.
   */
  dump_open_files: "dump_open_files",
  /**
   * Command, handled by `CCC_DumpResources`.
   * Not in gold builds.
   */
  dump_resources: "dump_resources",
  /**
   * Dumps all tasks that actor have.
   * Debug and Mixed builds only.
   */
  dump_tasks: "dump_tasks",
  /**
   * Command, handled by `CCC_E_Dump`.
   * Debug and Mixed builds only.
   */
  e_list: "e_list",
  /**
   * Command, handled by `CCC_E_Signal`.
   * Debug and Mixed builds only.
   */
  e_signal: "e_signal",
  /**
   * Integer from 6 to 1024.
   * Debug and Mixed builds only.
   */
  error_line_count: "error_line_count",
  /**
   * Command, handled by `CCC_FlushLog`.
   */
  flush: "flush",
  /**
   * Number from 5 to 180.
   */
  fov: "fov",
  /**
   * Toggle, `on` or `off`.
   */
  g_always_use_attitude_sensors: "g_always_use_attitude_sensors",
  /**
   * Toggle, `on` or `off`.
   */
  g_autopickup: "g_autopickup",
  /**
   * Toggle, `on` or `off`.
   */
  g_backrun: "g_backrun",
  /**
   * Number from 0 to 10.
   * Debug and Mixed builds only.
   */
  g_bullet_time_factor: "g_bullet_time_factor",
  /**
   * Integer from 0 to 100.
   * Multiplayer.
   */
  g_corpsenum: "g_corpsenum",
  /**
   * Toggle, `on` or `off`.
   */
  g_crouch_toggle: "g_crouch_toggle",
  /**
   * Number from 1 to 100.
   */
  g_cursor_intensity_max: "g_cursor_intensity_max",
  /**
   * Number from 1 to 100.
   */
  g_cursor_intensity_min: "g_cursor_intensity_min",
  /**
   * Number from 0 to 10.
   */
  g_cursor_intensity_step: "g_cursor_intensity_step",
  /**
   * Toggle, `on` or `off`.
   */
  g_dynamic_music: "g_dynamic_music",
  /**
   * Integer from 0 to 1000.
   * Multiplayer.
   */
  g_eventdelay: "g_eventdelay",
  /**
   * Integer from 0 to 1.
   */
  g_first_person_death: "g_first_person_death",
  /**
   * Set game difficulty.
   * Second param - difficulty value.
   */
  g_game_difficulty: "g_game_difficulty",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  g_god: "g_god",
  /**
   * Toggle, `on` or `off`.
   */
  g_important_save: "g_important_save",
  /**
   * Integer from 0 to 1.
   */
  g_inv_highlight_equipped: "g_inv_highlight_equipped",
  /**
   * Player kill.
   * Multiplayer.
   */
  g_kill: "g_kill",
  /**
   * Command, handled by `CCC_GameLanguage`.
   */
  g_language: "g_language",
  /**
   * Text, at most `std::size(CStringTable::LanguageIDInLTX)` characters.
   */
  g_language_ltx: "g_language_ltx",
  /**
   * Toggle, `on` or `off`.
   */
  g_loading_stages: "g_loading_stages",
  /**
   * Number from 10 to 100.
   */
  g_look_intensity_max: "g_look_intensity_max",
  /**
   * Number from 10 to 100.
   */
  g_look_intensity_min: "g_look_intensity_min",
  /**
   * Number from 0 to 10.
   */
  g_look_intensity_step: "g_look_intensity_step",
  /**
   * Toggle, `on` or `off`.
   */
  g_multi_item_pickup: "g_multi_item_pickup",
  /**
   * Command, handled by `CCC_ToggleNoClip`.
   * Not in gold builds.
   */
  g_no_clip: "g_no_clip",
  /**
   * Integer from 0 to 1.
   */
  g_normalize_mouse_sens: "g_normalize_mouse_sens",
  /**
   * Integer from 0 to 1.
   */
  g_normalize_upgrade_mouse_sens: "g_normalize_upgrade_mouse_sens",
  /**
   * Restart game.
   * Multiplayer.
   */
  g_restart: "g_restart",
  /**
   * Restart game fast.
   * Multiplayer.
   */
  g_restart_fast: "g_restart_fast",
  /**
   * Integer from 1 to 24.
   */
  g_sleep_time: "g_sleep_time",
  /**
   * Valid name of an entity or item that can be spawned.
   * Not in gold builds.
   */
  g_spawn: "g_spawn",
  /**
   * Valid name of an item that can be spawned.
   * Not in gold builds.
   */
  g_spawn_to_inventory: "g_spawn_to_inventory",
  /**
   * Swap teams for artefacthunt game.
   * Multiplayer.
   */
  g_swapteams: "g_swapteams",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  g_unlimitedammo: "g_unlimitedammo",
  /**
   * Integer from 0 to 1.
   */
  g_unload_ammo_after_pick_up: "g_unload_ammo_after_pick_up",
  /**
   * Toggle, `on` or `off`.
   */
  g_use_tracers: "g_use_tracers",
  /**
   * Number from 0.5 to 3.
   */
  gamepad_cursor_autohide_time: "gamepad_cursor_autohide_time",
  /**
   * Toggle, `on` or `off`.
   */
  gamepad_invert_x: "gamepad_invert_x",
  /**
   * Toggle, `on` or `off`.
   */
  gamepad_invert_y: "gamepad_invert_y",
  /**
   * Number from 0.001 to 1.
   */
  gamepad_sensor_deadzone: "gamepad_sensor_deadzone",
  /**
   * Number from 0.01 to 3.
   */
  gamepad_sensor_sens: "gamepad_sensor_sens",
  /**
   * Toggle, `on` or `off`.
   */
  gamepad_sensors_enable: "gamepad_sensors_enable",
  /**
   * Number from 0 to 1.
   */
  gamepad_stick_inner_deadzone: "gamepad_stick_inner_deadzone",
  /**
   * Number from 0 to 1.
   */
  gamepad_stick_outer_deadzone: "gamepad_stick_outer_deadzone",
  /**
   * Number from 0.00001 to 2.
   */
  gamepad_stick_sens_x: "gamepad_stick_sens_x",
  /**
   * Number from 0.00001 to 2.
   */
  gamepad_stick_sens_y: "gamepad_stick_sens_y",
  /**
   * List Players.
   * Multiplayer.
   */
  get_server_address: "get_server_address",
  /**
   * Creates GameSpy account:gs_create_account <nick> <unique_nick> <email> <password>.
   * Multiplayer.
   */
  gs_create_account: "gs_create_account",
  /**
   * Deletes current profile.
   * Multiplayer.
   */
  gs_delete_profile: "gs_delete_profile",
  /**
   * Lists account profiles : gs_list_profiles <email> <password>.
   * Multiplayer.
   */
  gs_list_profiles: "gs_list_profiles",
  /**
   * Logins to GameSpy: gs_login <email> <nick> <password>.
   * Multiplayer.
   */
  gs_login: "gs_login",
  /**
   * Logouts from the GameSpy session.
   * Multiplayer.
   */
  gs_logout: "gs_logout",
  /**
   * Prints current profile information.
   * Multiplayer.
   */
  gs_print_profile: "gs_print_profile",
  /**
   * Loads current profile information.
   * Multiplayer.
   */
  gs_profile: "gs_profile",
  /**
   * Registers new unique nick to the current profile.
   * Multiplayer.
   */
  gs_register_unique_nick: "gs_register_unique_nick",
  /**
   * Suggests unique nicks.
   * Multiplayer.
   */
  gs_suggest_unicks: "gs_suggest_unicks",
  /**
   * Command, handled by `CCC_Help`.
   */
  help: "help",
  /**
   * Command, handled by `CCC_HideConsole`.
   */
  hide: "hide",
  /**
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  hit_anims_block_blend: "hit_anims_block_blend",
  /**
   * Number from 0 to 100.
   * Debug and Mixed builds only.
   */
  hit_anims_channel_factor: "hit_anims_channel_factor",
  /**
   * Number from 0 to 100.
   * Debug and Mixed builds only.
   */
  hit_anims_power: "hit_anims_power",
  /**
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  hit_anims_reduce_blend: "hit_anims_reduce_blend",
  /**
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  hit_anims_reduce_blend_factor: "hit_anims_reduce_blend_factor",
  /**
   * Number from 0 to 100.
   * Debug and Mixed builds only.
   */
  hit_anims_rotational_power: "hit_anims_rotational_power",
  /**
   * Number from 0 to 10.
   * Debug and Mixed builds only.
   */
  hit_anims_side_sensitivity_threshold: "hit_anims_side_sensitivity_threshold",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  hit_anims_tune: "hit_anims_tune",
  /**
   * Toggle, `on` or `off`.
   */
  hud_binocular_vision: "hud_binocular_vision",
  /**
   * Toggle, `on` or `off`.
   */
  hud_crosshair: "hud_crosshair",
  /**
   * Toggle, `on` or `off`.
   */
  hud_crosshair_dist: "hud_crosshair_dist",
  /**
   * Toggle, `on` or `off`.
   */
  hud_draw: "hud_draw",
  /**
   * Number from 0.1 to 1.
   */
  hud_fov: "hud_fov",
  /**
   * Toggle, `on` or `off`.
   */
  hud_info: "hud_info",
  /**
   * Toggle, `on` or `off`.
   */
  hud_left_handed: "hud_left_handed",
  /**
   * Toggle, `on` or `off`.
   */
  hud_weapon: "hud_weapon",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_allign_free_foot: "ik_allign_free_foot",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_blend_free_foot: "ik_blend_free_foot",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_cam_shift: "ik_cam_shift",
  /**
   * Number from 1 to 10.
   * Debug and Mixed builds only.
   */
  ik_cam_shift_interpolation: "ik_cam_shift_interpolation",
  /**
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_cam_shift_speed: "ik_cam_shift_speed",
  /**
   * Number from 0 to 2.
   * Debug and Mixed builds only.
   */
  ik_cam_shift_tolerance: "ik_cam_shift_tolerance",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_collide_blend: "ik_collide_blend",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_local_blending: "ik_local_blending",
  /**
   * Hide console.
   */
  input_exclusive_mode: "input_exclusive_mode",
  /**
   * Command, handled by `CCC_InvDropAllItems`.
   * Debug and Mixed builds only.
   */
  inv_drop_all_items: "inv_drop_all_items",
  /**
   * Command, handled by `CCC_InvUpgradesCurItem`.
   * Debug and Mixed builds only.
   */
  inv_upgrades_cur_item: "inv_upgrades_cur_item",
  /**
   * Command, handled by `CCC_InvUpgradesHierarchy`.
   * Debug and Mixed builds only.
   */
  inv_upgrades_hierarchy: "inv_upgrades_hierarchy",
  /**
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  inv_upgrades_log: "inv_upgrades_log",
  /**
   * Command, handled by `CCC_JumpToLevel`.
   * Not in gold builds.
   */
  jump_to_level: "jump_to_level",
  /**
   * Integer from 0 to 1.
   */
  keypress_on_start: "keypress_on_start",
  /**
   * Command, handled by `CCC_ListActions`.
   */
  list_actions: "list_actions",
  /**
   * Load save.
   */
  load: "load",
  /**
   * Load last save.
   */
  load_last_save: "load_last_save",
  /**
   * Toggle, `on` or `off`.
   */
  lua_debug: "lua_debug",
  /**
   * Integer from 0 to 16.
   */
  lua_dump_depth: "lua_dump_depth",
  /**
   * Command, handled by `CCC_LuaGCMethod`.
   */
  lua_gc_method: "lua_gc_method",
  /**
   * Integer from 1000 to 16000.
   */
  lua_gc_timeout: "lua_gc_timeout",
  /**
   * Integer from 1 to 1000.
   */
  lua_gcstep: "lua_gcstep",
  /**
   * Toggle main menu.
   * Second param - on / off.
   */
  main_menu: "main_menu",
  /**
   * <ban_time_in_sec>\". To receive list of players ids see sv_listplayers.
   * Multiplayer.
   */
  make_config_dump: "make_config_dump",
  /**
   * <ban_time_in_sec>\". To receive list of players ids see sv_listplayers.
   * Multiplayer.
   */
  make_screenshot: "make_screenshot",
  /**
   * Toggle, `on` or `off`.
   */
  mm_mm_net_srv_dedicated: "mm_mm_net_srv_dedicated",
  /**
   * Toggle, `on` or `off`.
   */
  mm_net_con_publicserver: "mm_net_con_publicserver",
  /**
   * Integer from 1 to 32.
   */
  mm_net_con_spectator: "mm_net_con_spectator",
  /**
   * Toggle, `on` or `off`.
   */
  mm_net_con_spectator_on: "mm_net_con_spectator_on",
  /**
   * Toggle, `on` or `off`.
   */
  mm_net_filter_empty: "mm_net_filter_empty",
  /**
   * Toggle, `on` or `off`.
   */
  mm_net_filter_full: "mm_net_filter_full",
  /**
   * Toggle, `on` or `off`.
   */
  mm_net_filter_listen: "mm_net_filter_listen",
  /**
   * Toggle, `on` or `off`.
   */
  mm_net_filter_pass: "mm_net_filter_pass",
  /**
   * Toggle, `on` or `off`.
   */
  mm_net_filter_wo_ff: "mm_net_filter_wo_ff",
  /**
   * Toggle, `on` or `off`.
   */
  mm_net_filter_wo_pass: "mm_net_filter_wo_pass",
  /**
   * Command, handled by `CCC_UserName`.
   */
  mm_net_player_name: "mm_net_player_name",
  /**
   * One of the `g_GameModes` values.
   */
  mm_net_srv_gamemode: "mm_net_srv_gamemode",
  /**
   * Integer from 2 to 32.
   */
  mm_net_srv_maxplayers: "mm_net_srv_maxplayers",
  /**
   * Text, at most `sizeof(m_serverName)` characters.
   */
  mm_net_srv_name: "mm_net_srv_name",
  /**
   * Text, at most `sizeof(reinforcementType)` characters.
   */
  mm_net_srv_reinforcement_type: "mm_net_srv_reinforcement_type",
  /**
   * Number from 0 to 100.
   */
  mm_net_weather_rateofchange: "mm_net_weather_rateofchange",
  /**
   * Toggle, `on` or `off`.
   */
  mouse_invert: "mouse_invert",
  /**
   * Number from 0.001 to 0.6.
   */
  mouse_sens: "mouse_sens",
  /**
   * Cancels mpdemoplay_pause_on.
   * Multiplayer.
   */
  mpdemoplay_cancel_pause_on: "mpdemoplay_cancel_pause_on",
  /**
   * Decreases demo play speed.
   * Multiplayer.
   */
  mpdemoplay_divspeed: "mpdemoplay_divspeed",
  /**
   * Increases demo play speed.
   * Multiplayer.
   */
  mpdemoplay_mulspeed: "mpdemoplay_mulspeed",
  /**
   * Play demo until specified event (then pause playing). Format: mpdemoplay_pause_on.
   * Multiplayer.
   */
  mpdemoplay_pause_on: "mpdemoplay_pause_on",
  /**
   * Restarts playing demo.
   * Multiplayer.
   */
  mpdemoplay_restart: "mpdemoplay_restart",
  /**
   * Rewind demo until specified event (then pause playing). Format: mpdemoplay_rewind_until.
   * Multiplayer.
   */
  mpdemoplay_rewind_until: "mpdemoplay_rewind_until",
  /**
   * Set demo play speed (0.0, 8.0].
   * Multiplayer.
   */
  mpdemoplay_speed_set: "mpdemoplay_speed_set",
  /**
   * Stops rewinding (mpdemoplay_rewind_until).
   * Multiplayer.
   */
  mpdemoplay_stop_rewind: "mpdemoplay_stop_rewind",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_ai_vision: "mt_ai_vision",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_alife: "mt_alife",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_bullets: "mt_bullets",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_detail_path: "mt_detail_path",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_level_path: "mt_level_path",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_level_sounds: "mt_level_sounds",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_map: "mt_map",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  mt_network: "mt_network",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_object_handler: "mt_object_handler",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  mt_particles: "mt_particles",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  mt_physics: "mt_physics",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_script_gc: "mt_script_gc",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  mt_sound: "mt_sound",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_sound_player: "mt_sound_player",
  /**
   * Player name.
   * Multiplayer.
   */
  name: "name",
  /**
   * Clear client net statistic.
   * Multiplayer.
   */
  net_cl_clearstats: "net_cl_clearstats",
  /**
   * Integer from 0 to 2000.
   * Multiplayer.
   */
  net_cl_icurvesize: "net_cl_icurvesize",
  /**
   * Integer from 0 to 2.
   * Multiplayer.
   */
  net_cl_icurvetype: "net_cl_icurvetype",
  /**
   * Number from -1 to 1.
   * Multiplayer.
   */
  net_cl_interpolation: "net_cl_interpolation",
  /**
   * Toggle, `on` or `off`.
   * Multiplayer.
   */
  net_cl_log_data: "net_cl_log_data",
  /**
   * Integer from 0 to 10.
   * Multiplayer; Debug and Mixed builds only.
   */
  net_cl_pending_lim: "net_cl_pending_lim",
  /**
   * Resyncronize client.
   * Multiplayer.
   */
  net_cl_resync: "net_cl_resync",
  /**
   * Integer from 20 to 100.
   * Multiplayer; Debug and Mixed builds only.
   */
  net_cl_update_rate: "net_cl_update_rate",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  net_compressor_enabled: "net_compressor_enabled",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  net_compressor_gather_stats: "net_compressor_gather_stats",
  /**
   * Valid arguments is [info info_full on off].
   * Multiplayer.
   */
  net_compressor_status: "net_compressor_status",
  /**
   * Integer from 0 to 1.
   */
  net_dbg_dump_export_obj: "net_dbg_dump_export_obj",
  /**
   * Integer from 0 to 1.
   */
  net_dbg_dump_import_obj: "net_dbg_dump_import_obj",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  net_dbg_dump_update_read: "net_dbg_dump_update_read",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  net_dbg_dump_update_write: "net_dbg_dump_update_write",
  /**
   * Dbg Num Objects.
   * Multiplayer; Debug and Mixed builds only.
   */
  net_dbg_objects: "net_dbg_objects",
  /**
   * Integer from 0 to 64.
   */
  net_dedicated_sleep: "net_dedicated_sleep",
  /**
   * Toggle, `on` or `off`.
   * Multiplayer; Debug and Mixed builds only.
   */
  net_dump_size: "net_dump_size",
  /**
   * Clear server net statistic.
   * Multiplayer.
   */
  net_sv_clearstats: "net_sv_clearstats",
  /**
   * Integer from 0 to 2.
   * Multiplayer.
   */
  net_sv_gpmode: "net_sv_gpmode",
  /**
   * Toggle, `on` or `off`.
   * Multiplayer.
   */
  net_sv_log_data: "net_sv_log_data",
  /**
   * Integer from 0 to 10.
   * Multiplayer.
   */
  net_sv_pending_lim: "net_sv_pending_lim",
  /**
   * Integer from 1 to 100.
   * Multiplayer.
   */
  net_sv_update_rate: "net_sv_update_rate",
  /**
   * Number from 0 to 1000000000.
   * Debug and Mixed builds only.
   */
  ph_break_common_factor: "ph_break_common_factor",
  /**
   * Command, handled by `CCC_PHFps`.
   */
  ph_frequency: "ph_frequency",
  /**
   * Command, handled by `CCC_PHGravity`.
   * Debug and Mixed builds only.
   */
  ph_gravity: "ph_gravity",
  /**
   * Command, handled by `CCC_PHIterations`.
   */
  ph_iterations: "ph_iterations",
  /**
   * Number from 0 to 1000000000.
   * Debug and Mixed builds only.
   */
  ph_rigid_break_weapon_factor: "ph_rigid_break_weapon_factor",
  /**
   * Number from 0.000001 to 1000.
   * Debug and Mixed builds only.
   */
  ph_timefactor: "ph_timefactor",
  /**
   * Integer from 0 to 255.
   * Debug and Mixed builds only.
   */
  ph_tri_clear_disable_count: "ph_tri_clear_disable_count",
  /**
   * Number from 1.01 to 3.
   * Debug and Mixed builds only.
   */
  ph_tri_query_ex_aabb_rate: "ph_tri_query_ex_aabb_rate",
  /**
   * Quit from game.
   */
  quit: "quit",
  /**
   * Toggle, `on` or `off`.
   */
  r1_detail_textures: "r1_detail_textures",
  /**
   * Toggle, `on` or `off`.
   */
  r1_dlights: "r1_dlights",
  /**
   * Number from 10 to 150.
   */
  r1_dlights_clip: "r1_dlights_clip",
  /**
   * Toggle, `on` or `off`.
   */
  r1_ffp: "r1_ffp",
  /**
   * Toggle, `on` or `off`.
   */
  r1_ffp_lightmaps: "r1_ffp_lightmaps",
  /**
   * Number from 0.2 to 5.
   */
  r1_fog_luminance: "r1_fog_luminance",
  /**
   * Integer from 0 to 1.
   */
  r1_force_geomx: "r1_force_geomx",
  /**
   * Integer from 2 to 32.
   */
  r1_glows_per_frame: "r1_glows_per_frame",
  /**
   * Number from 0 to 0.333.
   */
  r1_lmodel_lerp: "r1_lmodel_lerp",
  /**
   * Number from -1 to 1.
   */
  r1_pps_u: "r1_pps_u",
  /**
   * Number from -1 to 1.
   */
  r1_pps_v: "r1_pps_v",
  /**
   * Integer from 0 to 2.
   */
  r1_software_skinning: "r1_software_skinning",
  /**
   * Number from 16 to 96.
   */
  r1_ssa_lod_a: "r1_ssa_lod_a",
  /**
   * Number from 16 to 64.
   */
  r1_ssa_lod_b: "r1_ssa_lod_b",
  /**
   * Command, handled by `CCC_tf_MipBias`.
   */
  r1_tf_mipbias: "r1_tf_mipbias",
  /**
   * Toggle, `on` or `off`.
   */
  r2_aa: "r2_aa",
  /**
   * Three numbers, `x,y,z`.
   */
  r2_aa_break: "r2_aa_break",
  /**
   * Number from 0.3 to 0.7.
   */
  r2_aa_kernel: "r2_aa_kernel",
  /**
   * Three numbers, `x,y,z`.
   */
  r2_aa_weight: "r2_aa_weight",
  /**
   * Toggle, `on` or `off`.
   */
  r2_allow_r1_lights: "r2_allow_r1_lights",
  /**
   * Toggle, `on` or `off`.
   */
  r2_detail_bump: "r2_detail_bump",
  /**
   * Integer from 4 to 25.
   * Not in gold builds.
   */
  r2_dhemi_count: "r2_dhemi_count",
  /**
   * Number from 0 to 1.
   * Not in gold builds.
   */
  r2_dhemi_light_flow: "r2_dhemi_light_flow",
  /**
   * Number from 0 to 100.
   * Not in gold builds.
   */
  r2_dhemi_light_scale: "r2_dhemi_light_scale",
  /**
   * Number from 0 to 100.
   * Not in gold builds.
   */
  r2_dhemi_sky_scale: "r2_dhemi_sky_scale",
  /**
   * Number from 0 to 10.
   * Not in gold builds.
   */
  r2_dhemi_smooth: "r2_dhemi_smooth",
  /**
   * Command, handled by `CCC_Dof`.
   */
  r2_dof: "r2_dof",
  /**
   * Toggle, `on` or `off`.
   */
  r2_dof_enable: "r2_dof_enable",
  /**
   * Command, handled by `CCC_DofFar`.
   */
  r2_dof_far: "r2_dof_far",
  /**
   * Command, handled by `CCC_DofFocus`.
   */
  r2_dof_focus: "r2_dof_focus",
  /**
   * Number from 0 to 10.
   */
  r2_dof_kernel: "r2_dof_kernel",
  /**
   * Command, handled by `CCC_DofNear`.
   */
  r2_dof_near: "r2_dof_near",
  /**
   * Number from -10000 to 10000.
   */
  r2_dof_sky: "r2_dof_sky",
  /**
   * Toggle, `on` or `off`.
   */
  r2_exp_donttest_shad: "r2_exp_donttest_shad",
  /**
   * Toggle, `on` or `off`.
   */
  r2_gi: "r2_gi",
  /**
   * Number from `EPS` to 0.1.
   */
  r2_gi_clip: "r2_gi_clip",
  /**
   * Integer from 1 to 5.
   */
  r2_gi_depth: "r2_gi_depth",
  /**
   * Integer from 8 to 256.
   */
  r2_gi_photons: "r2_gi_photons",
  /**
   * Number from `EPS_L` to 0.99.
   */
  r2_gi_refl: "r2_gi_refl",
  /**
   * Number from 0 to 10.
   */
  r2_gloss_factor: "r2_gloss_factor",
  /**
   * Toggle, `on` or `off`.
   */
  r2_ls_bloom_fast: "r2_ls_bloom_fast",
  /**
   * Number from 0.01 to 1.
   */
  r2_ls_bloom_kernel_b: "r2_ls_bloom_kernel_b",
  /**
   * Number from 1 to 7.
   */
  r2_ls_bloom_kernel_g: "r2_ls_bloom_kernel_g",
  /**
   * Number from 0.5 to 2.
   */
  r2_ls_bloom_kernel_scale: "r2_ls_bloom_kernel_scale",
  /**
   * Number from 0 to 100.
   */
  r2_ls_bloom_speed: "r2_ls_bloom_speed",
  /**
   * Number from 0 to 1.
   */
  r2_ls_bloom_threshold: "r2_ls_bloom_threshold",
  /**
   * Number from -0.5 to 0.5.
   */
  r2_ls_depth_bias: "r2_ls_depth_bias",
  /**
   * Number from 0.5 to 1.5.
   */
  r2_ls_depth_scale: "r2_ls_depth_scale",
  /**
   * Number from 0.1 to 3.
   */
  r2_ls_dsm_kernel: "r2_ls_dsm_kernel",
  /**
   * Number from 0.1 to 3.
   */
  r2_ls_psm_kernel: "r2_ls_psm_kernel",
  /**
   * Number from 0.5 to 1.
   */
  r2_ls_squality: "r2_ls_squality",
  /**
   * Number from 0.1 to 3.
   */
  r2_ls_ssm_kernel: "r2_ls_ssm_kernel",
  /**
   * Number from 0 to 1.
   */
  r2_mblur: "r2_mblur",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  r2_mt: "r2_mt",
  /**
   * Integer from 0 to 1.
   */
  r2_mt_calculate: "r2_mt_calculate",
  /**
   * Integer from 0 to 1.
   * The R4 renderer only.
   */
  r2_mt_render: "r2_mt_render",
  /**
   * Number from 0 to 0.5.
   */
  r2_parallax_h: "r2_parallax_h",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  r2_shadow_cascede_old: "r2_shadow_cascede_old",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  r2_shadow_cascede_zcul: "r2_shadow_cascede_zcul",
  /**
   * Number from 0.2 to 1.
   */
  r2_slight_fade: "r2_slight_fade",
  /**
   * One of the `qsmapsize_token` values.
   */
  r2_smap_size: "r2_smap_size",
  /**
   * Toggle, `on` or `off`.
   */
  r2_soft_particles: "r2_soft_particles",
  /**
   * Toggle, `on` or `off`.
   */
  r2_soft_water: "r2_soft_water",
  /**
   * Number from 16 to 96.
   */
  r2_ssa_lod_a: "r2_ssa_lod_a",
  /**
   * Number from 32 to 64.
   */
  r2_ssa_lod_b: "r2_ssa_lod_b",
  /**
   * One of the `qssao_token` values.
   */
  r2_ssao: "r2_ssao",
  /**
   * Toggle, `on` or `off`.
   */
  r2_ssao_blur: "r2_ssao_blur",
  /**
   * Toggle, `on` or `off`.
   */
  r2_ssao_half_data: "r2_ssao_half_data",
  /**
   * Toggle, `on` or `off`.
   */
  r2_ssao_hbao: "r2_ssao_hbao",
  /**
   * Toggle, `on` or `off`.
   */
  r2_ssao_hdao: "r2_ssao_hdao",
  /**
   * Command, handled by `CCC_SSAO_Mode`.
   */
  r2_ssao_mode: "r2_ssao_mode",
  /**
   * Toggle, `on` or `off`.
   */
  r2_ssao_opt_data: "r2_ssao_opt_data",
  /**
   * Toggle, `on` or `off`.
   */
  r2_steep_parallax: "r2_steep_parallax",
  /**
   * Toggle, `on` or `off`.
   */
  r2_sun: "r2_sun",
  /**
   * Number from -0.5 to 0.5.
   */
  r2_sun_depth_far_bias: "r2_sun_depth_far_bias",
  /**
   * Number from 0.5 to 1.5.
   */
  r2_sun_depth_far_scale: "r2_sun_depth_far_scale",
  /**
   * Number from -0.5 to 0.5.
   */
  r2_sun_depth_near_bias: "r2_sun_depth_near_bias",
  /**
   * Number from 0.5 to 1.5.
   */
  r2_sun_depth_near_scale: "r2_sun_depth_near_scale",
  /**
   * Toggle, `on` or `off`.
   */
  r2_sun_details: "r2_sun_details",
  /**
   * Number from 51 to 180.
   * Renderers other than R1 only.
   */
  r2_sun_far: "r2_sun_far",
  /**
   * Toggle, `on` or `off`.
   */
  r2_sun_focus: "r2_sun_focus",
  /**
   * Number from -1 to 3.
   */
  r2_sun_lumscale: "r2_sun_lumscale",
  /**
   * Number from 0 to 3.
   */
  r2_sun_lumscale_amb: "r2_sun_lumscale_amb",
  /**
   * Number from 0 to 3.
   */
  r2_sun_lumscale_hemi: "r2_sun_lumscale_hemi",
  /**
   * Number from 1 to 150.
   */
  r2_sun_near: "r2_sun_near",
  /**
   * Number from 0.5 to 1.
   */
  r2_sun_near_border: "r2_sun_near_border",
  /**
   * One of the `qsun_quality_token` values.
   */
  r2_sun_quality: "r2_sun_quality",
  /**
   * One of the `qsun_shafts_token` values.
   */
  r2_sun_shafts: "r2_sun_shafts",
  /**
   * Toggle, `on` or `off`.
   */
  r2_sun_tsm: "r2_sun_tsm",
  /**
   * Number from -0.5 to 0.5.
   */
  r2_sun_tsm_bias: "r2_sun_tsm_bias",
  /**
   * Number from 0.001 to 0.8.
   */
  r2_sun_tsm_proj: "r2_sun_tsm_proj",
  /**
   * Command, handled by `CCC_tf_MipBias`.
   */
  r2_tf_mipbias: "r2_tf_mipbias",
  /**
   * Toggle, `on` or `off`.
   */
  r2_tonemap: "r2_tonemap",
  /**
   * Number from 0.01 to 10.
   */
  r2_tonemap_adaptation: "r2_tonemap_adaptation",
  /**
   * Number from 0 to 1.
   */
  r2_tonemap_amount: "r2_tonemap_amount",
  /**
   * Number from 0.0001 to 1.
   */
  r2_tonemap_lowlum: "r2_tonemap_lowlum",
  /**
   * Number from 0 to 2.
   */
  r2_tonemap_middlegray: "r2_tonemap_middlegray",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  r2_use_nvdbt: "r2_use_nvdbt",
  /**
   * Toggle, `on` or `off`.
   */
  r2_volumetric_lights: "r2_volumetric_lights",
  /**
   * Integer from 0 to 1.
   */
  r2_wait_sleep: "r2_wait_sleep",
  /**
   * Integer from 100 to 1000.
   */
  r2_wait_timeout: "r2_wait_timeout",
  /**
   * Toggle, `on` or `off`.
   */
  r2_zfill: "r2_zfill",
  /**
   * Number from 0.001 to 0.5.
   */
  r2_zfill_depth: "r2_zfill_depth",
  /**
   * Command, handled by `CCC_R2GM`.
   */
  r2em: "r2em",
  /**
   * Toggle, `on` or `off`.
   */
  r3_dynamic_wet_surfaces: "r3_dynamic_wet_surfaces",
  /**
   * Number from 20 to 100.
   */
  r3_dynamic_wet_surfaces_far: "r3_dynamic_wet_surfaces_far",
  /**
   * Number from 5 to 70.
   */
  r3_dynamic_wet_surfaces_near: "r3_dynamic_wet_surfaces_near",
  /**
   * Integer from 64 to 2048.
   */
  r3_dynamic_wet_surfaces_sm_res: "r3_dynamic_wet_surfaces_sm_res",
  /**
   * Command, handled by `CCC_Fog_Reload`.
   * The R3 and R4 renderers only, not in gold builds.
   */
  r3_fog_reload: "r3_fog_reload",
  /**
   * Toggle, `on` or `off`.
   */
  r3_gbuffer_opt: "r3_gbuffer_opt",
  /**
   * One of the `qminmax_sm_token` values.
   */
  r3_minmax_sm: "r3_minmax_sm",
  /**
   * One of the `qmsaa_token` values.
   */
  r3_msaa: "r3_msaa",
  /**
   * One of the `qmsaa__atest_token` values.
   */
  r3_msaa_alphatest: "r3_msaa_alphatest",
  /**
   * Toggle, `on` or `off`.
   */
  r3_use_dx10_1: "r3_use_dx10_1",
  /**
   * Toggle, `on` or `off`.
   */
  r3_volumetric_smoke: "r3_volumetric_smoke",
  /**
   * One of the `qwater_reflection_quality_token` values.
   */
  r3_water_refl: "r3_water_refl",
  /**
   * Toggle, `on` or `off`.
   */
  r3_water_refl_half_depth: "r3_water_refl_half_depth",
  /**
   * Toggle, `on` or `off`.
   */
  r3_water_refl_jitter: "r3_water_refl_jitter",
  /**
   * Toggle, `on` or `off`.
   */
  r4_enable_tessellation: "r4_enable_tessellation",
  /**
   * Toggle, `on` or `off`.
   */
  r4_wireframe: "r4_wireframe",
  /**
   * Toggle, `on` or `off`.
   */
  r__actor_shadow: "r__actor_shadow",
  /**
   * Integer from 0 to 1.
   */
  r__clear_models_on_unload: "r__clear_models_on_unload",
  /**
   * Number from 0.1 to 0.99.
   */
  r__detail_density: "r__detail_density",
  /**
   * Number from 1 to 2.
   */
  r__detail_height: "r__detail_height",
  /**
   * Number from 0.5 to 0.95.
   * Debug and Mixed builds only.
   */
  r__detail_l_ambient: "r__detail_l_ambient",
  /**
   * Number from 0.1 to 0.5.
   * Debug and Mixed builds only.
   */
  r__detail_l_aniso: "r__detail_l_aniso",
  /**
   * Command, handled by `CCC_detail_radius`.
   */
  r__detail_radius: "r__detail_radius",
  /**
   * Number from 5 to 175.
   */
  r__dtex_range: "r__dtex_range",
  /**
   * Number from 0.1 to 2.
   */
  r__geometry_lod: "r__geometry_lod",
  /**
   * Integer from 4 to 30.
   * Debug and Mixed builds only.
   */
  r__lsleep_frames: "r__lsleep_frames",
  /**
   * Number from 16 to 96.
   * Debug and Mixed builds only.
   */
  r__ssa_glod_end: "r__ssa_glod_end",
  /**
   * Number from 128 to 512.
   * Debug and Mixed builds only.
   */
  r__ssa_glod_start: "r__ssa_glod_start",
  /**
   * Integer from 1 to 8.
   */
  r__supersample: "r__supersample",
  /**
   * Command, handled by `CCC_tf_Aniso`.
   */
  r__tf_aniso: "r__tf_aniso",
  /**
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  r__wallmark_shift_pp: "r__wallmark_shift_pp",
  /**
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  r__wallmark_shift_v: "r__wallmark_shift_v",
  /**
   * Number from 1 to `10.f * 60`.
   */
  r__wallmark_ttl: "r__wallmark_ttl",
  /**
   * Integer from 0 to 1.
   */
  r__wallmarks_on_skeleton: "r__wallmarks_on_skeleton",
  /**
   * Command, handled by `CCC_RadminCmd`.
   * Multiplayer.
   */
  ra: "ra",
  /**
   * Integer from 0 to 4.
   * Debug and Mixed builds only.
   */
  rank_for_buymenu: "rank_for_buymenu",
  /**
   * Command, handled by `CCC_memory_stats`.
   */
  render_memory_stats: "render_memory_stats",
  /**
   * Command, handled by `CCC_renderer`.
   */
  renderer: "renderer",
  /**
   * Toggle, `on` or `off`.
   */
  rs_always_active: "rs_always_active",
  /**
   * Command, handled by `CCC_Gamma`.
   */
  rs_c_brightness: "rs_c_brightness",
  /**
   * Command, handled by `CCC_Gamma`.
   */
  rs_c_contrast: "rs_c_contrast",
  /**
   * Command, handled by `CCC_Gamma`.
   */
  rs_c_gamma: "rs_c_gamma",
  /**
   * Toggle, `on` or `off`.
   */
  rs_cam_pos: "rs_cam_pos",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  rs_clear_bb: "rs_clear_bb",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_detail: "rs_detail",
  /**
   * Command, handled by `CCC_Editor`.
   */
  rs_editor: "rs_editor",
  /**
   * Toggle, `on` or `off`.
   */
  rs_fps: "rs_fps",
  /**
   * Toggle, `on` or `off`.
   */
  rs_fps_graph: "rs_fps_graph",
  /**
   * Integer from 30 to 501.
   */
  rs_fps_limit: "rs_fps_limit",
  /**
   * Integer from 30 to 501.
   */
  rs_fps_limit_in_menu: "rs_fps_limit_in_menu",
  /**
   * Command, handled by `CCC_Fullscreen`.
   */
  rs_fullscreen: "rs_fullscreen",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_hom_depth_draw: "rs_hom_depth_draw",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  rs_occ_draw: "rs_occ_draw",
  /**
   * Command, handled by `CCC_Refresh60hz`.
   */
  rs_refresh_60hz: "rs_refresh_60hz",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_render_dynamics: "rs_render_dynamics",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_render_particles: "rs_render_particles",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_render_statics: "rs_render_statics",
  /**
   * Integer from 2 to 128.
   */
  rs_skeleton_update: "rs_skeleton_update",
  /**
   * Toggle, `on` or `off`.
   */
  rs_stats: "rs_stats",
  /**
   * Toggle, `on` or `off`.
   */
  rs_v_sync: "rs_v_sync",
  /**
   * Number from 0.4 to 1.5.
   */
  rs_vis_distance: "rs_vis_distance",
  /**
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_wireframe: "rs_wireframe",
  /**
   * Command, handled by `CCC_Script`.
   * Not in gold builds.
   */
  run_script: "run_script",
  /**
   * Command, handled by `CCC_ScriptCommand`.
   * Not in gold builds.
   */
  run_string: "run_string",
  /**
   * Create game save.
   */
  save: "save",
  /**
   * Command, handled by `CCC_Screenshot`.
   */
  screenshot: "screenshot",
  /**
   * Make screenshot of each player in the game. Format: \"screenshot_all.
   * Multiplayer.
   */
  screenshot_all: "screenshot_all",
  /**
   * Script_debug_break initiate script debugger [DebugBreak] command script_debug_stop stop script debugger activity script_debug_restart restarts script debugger or start if no script debugger presents.
   * Debug and Mixed builds only, builds with the script debugger only.
   */
  script_debug_break: "script_debug_break",
  /**
   * Script_debug_break initiate script debugger [DebugBreak] command script_debug_stop stop script debugger activity script_debug_restart restarts script debugger or start if no script debugger presents.
   * Debug and Mixed builds only, builds with the script debugger only.
   */
  script_debug_restart: "script_debug_restart",
  /**
   * Script_debug_break initiate script debugger [DebugBreak] command script_debug_stop stop script debugger activity script_debug_restart restarts script debugger or start if no script debugger presents.
   * Debug and Mixed builds only, builds with the script debugger only.
   */
  script_debug_stop: "script_debug_stop",
  /**
   * Command, handled by `CCC_ShowSmartCastStats`.
   * Debug and Mixed builds only.
   */
  show_smart_cast_stats: "show_smart_cast_stats",
  /**
   * Text, at most 32 characters.
   */
  slot_0: "slot_0",
  /**
   * Text, at most 32 characters.
   */
  slot_1: "slot_1",
  /**
   * Text, at most 32 characters.
   */
  slot_2: "slot_2",
  /**
   * Text, at most 32 characters.
   */
  slot_3: "slot_3",
  /**
   * Toggle, `on` or `off`.
   */
  snd_acceleration: "snd_acceleration",
  /**
   * Integer from 4 to 64.
   */
  snd_cache_size: "snd_cache_size",
  /**
   * Command, handled by `CCC_soundDevice`.
   */
  snd_device: "snd_device",
  /**
   * Toggle, `on` or `off`.
   */
  snd_efx: "snd_efx",
  /**
   * Command, handled by `CCC_SND_Restart`.
   */
  snd_restart: "snd_restart",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats: "snd_stats",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_ai_dist: "snd_stats_ai_dist",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_info_name: "snd_stats_info_name",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_info_object: "snd_stats_info_object",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_max_dist: "snd_stats_max_dist",
  /**
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_min_dist: "snd_stats_min_dist",
  /**
   * Integer from 4 to 256.
   */
  snd_targets: "snd_targets",
  /**
   * Toggle, `on` or `off`.
   */
  snd_use_float32: "snd_use_float32",
  /**
   * Number from 0 to 1.
   */
  snd_volume_eff: "snd_volume_eff",
  /**
   * Number from 0 to 1.
   */
  snd_volume_music: "snd_volume_music",
  /**
   * Text, at most 32 characters.
   * Debug and Mixed builds only.
   */
  stalker_death_anim: "stalker_death_anim",
  /**
   * Command, handled by `CCC_Start`.
   */
  start: "start",
  /**
   * Command, handled by `CCC_StartTimeSingle`.
   * Not in gold builds.
   */
  start_time_single: "start_time_single",
  /**
   * Command, handled by `CCC_MemStats`.
   */
  stat_memory: "stat_memory",
  /**
   * Command, handled by `CCC_ModelPoolStat`.
   * Debug and Mixed builds only.
   */
  stat_models: "stat_models",
  /**
   * Command, handled by `CCC_MotionsStat`.
   * Not in gold builds.
   */
  stat_motions: "stat_motions",
  /**
   * Command, handled by `CCC_TexturesStat`.
   * Not in gold builds.
   */
  stat_textures: "stat_textures",
  /**
   * Adds map to map rotation list.
   * Multiplayer.
   */
  sv_addmap: "sv_addmap",
  /**
   * One of the `g_ban_times` values.
   * Multiplayer.
   */
  sv_adm_menu_ban_time: "sv_adm_menu_ban_time",
  /**
   * Integer from 1 to 200.
   * Multiplayer.
   */
  sv_adm_menu_ping_limit: "sv_adm_menu_ping_limit",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_anomalies_enabled: "sv_anomalies_enabled",
  /**
   * Integer from 0 to 180.
   * Multiplayer.
   */
  sv_anomalies_length: "sv_anomalies_length",
  /**
   * Integer from 0 to 600.
   * Multiplayer.
   */
  sv_artefact_respawn_delta: "sv_artefact_respawn_delta",
  /**
   * Integer from 0 to `5 * 60`.
   * Multiplayer.
   */
  sv_artefact_returning_time: "sv_artefact_returning_time",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_artefact_spawn_force: "sv_artefact_spawn_force",
  /**
   * Integer from 0 to 180.
   * Multiplayer.
   */
  sv_artefact_stay_time: "sv_artefact_stay_time",
  /**
   * Integer from 1 to 100.
   * Multiplayer.
   */
  sv_artefacts_count: "sv_artefacts_count",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_auto_team_balance: "sv_auto_team_balance",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_auto_team_swap: "sv_auto_team_swap",
  /**
   * To receive list of players ids see sv_listplayers.
   * Multiplayer.
   */
  sv_banplayer: "sv_banplayer",
  /**
   * Ban player by hex digest (CAREFULLY: low level command). Format: \"sv_banplayer_by_digest <hex digest>  <ban_time_in_sec>\". To get player hex digest you can enter: sv_listplayers_banned.
   * Multiplayer.
   */
  sv_banplayer_by_digest: "sv_banplayer_by_digest",
  /**
   * Ban Player by IP. Format: \"sb_banplayer_ip <ip address>\".
   * Multiplayer.
   */
  sv_banplayer_ip: "sv_banplayer_ip",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_bearercantsprint: "sv_bearercantsprint",
  /**
   * Changing Game Type : <dm>,<tdm>,<ah>,<cta>.
   * Multiplayer.
   */
  sv_changegametype: "sv_changegametype",
  /**
   * Changing Game Type. Arguments: <level name> <level version>.
   * Multiplayer.
   */
  sv_changelevel: "sv_changelevel",
  /**
   * Changing level, version and game type. Arguments: <level name> <level version> <game type>.
   * Multiplayer.
   */
  sv_changelevelgametype: "sv_changelevelgametype",
  /**
   * Integer from 0 to 60.
   * Multiplayer.
   */
  sv_client_reconnect_time: "sv_client_reconnect_time",
  /**
   * Integer from 1 to 100.
   * Windows only.
   */
  sv_console_update_rate: "sv_console_update_rate",
  /**
   * Integer from 0 to 10.
   * Multiplayer.
   */
  sv_cta_runkup_to_arts_div: "sv_cta_runkup_to_arts_div",
  /**
   * Integer from 1 to 1000.
   */
  sv_dedicated_server_update_rate: "sv_dedicated_server_update_rate",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_dmgblockindicator: "sv_dmgblockindicator",
  /**
   * Integer from 0 to 600.
   * Multiplayer.
   */
  sv_dmgblocktime: "sv_dmgblocktime",
  /**
   * Shows current server settings.
   * Multiplayer.
   */
  sv_dump_online_statistics: "sv_dump_online_statistics",
  /**
   * Integer from 0 to 60.
   * Multiplayer.
   */
  sv_dump_online_statistics_period: "sv_dump_online_statistics_period",
  /**
   * Integer from 0 to 3600.
   * Multiplayer.
   */
  sv_forcerespawn: "sv_forcerespawn",
  /**
   * Integer from 0 to 1000.
   * Multiplayer.
   */
  sv_fraglimit: "sv_fraglimit",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_friendly_indicators: "sv_friendly_indicators",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_friendly_names: "sv_friendly_names",
  /**
   * Number from 0 to 2.
   * Multiplayer.
   */
  sv_friendlyfire: "sv_friendlyfire",
  /**
   * Integer from 0 to 60.
   * Multiplayer.
   */
  sv_hail_to_winner_time: "sv_hail_to_winner_time",
  /**
   * Integer from 0 to 1.
   * Multiplayer; Debug and Mixed builds only.
   */
  sv_ignore_money_on_buy: "sv_ignore_money_on_buy",
  /**
   * Command, handled by `CCC_AuthCheck`.
   * Multiplayer; not in gold builds.
   */
  sv_ignore_version_mismatch: "sv_ignore_version_mismatch",
  /**
   * Integer from 0 to 60.
   * Multiplayer.
   */
  sv_invincible_time: "sv_invincible_time",
  /**
   * Kick Player by name.
   * Multiplayer.
   */
  sv_kick: "sv_kick",
  /**
   * Kick player by ID.
   * Multiplayer.
   */
  sv_kick_id: "sv_kick_id",
  /**
   * List maps in map rotation list.
   * Multiplayer.
   */
  sv_listmaps: "sv_listmaps",
  /**
   * List Players. Format: \"sv_listplayers [ filter string ]\".
   * Multiplayer.
   */
  sv_listplayers: "sv_listplayers",
  /**
   * List of Banned Players. Format: \"sv_listplayers_banned [ filter string ]\".
   * Multiplayer.
   */
  sv_listplayers_banned: "sv_listplayers_banned",
  /**
   * Integer from 1 to 2000.
   * Multiplayer.
   */
  sv_max_ping_limit: "sv_max_ping_limit",
  /**
   * Integer from 1 to 30.
   * Multiplayer.
   */
  sv_max_suspicious_actions: "sv_max_suspicious_actions",
  /**
   * Activating pointed Anomaly set.
   * Multiplayer.
   */
  sv_nextanomalyset: "sv_nextanomalyset",
  /**
   * Switch to Next Map in map rotation list.
   * Multiplayer.
   */
  sv_nextmap: "sv_nextmap",
  /**
   * Command, handled by `CCC_AuthCheck`.
   * Multiplayer; not in gold builds.
   */
  sv_no_auth_check: "sv_no_auth_check",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_pda_hunt: "sv_pda_hunt",
  /**
   * Switch to Previous Map in map rotation list.
   * Multiplayer.
   */
  sv_prevmap: "sv_prevmap",
  /**
   * Integer from -1 to 3600.
   * Multiplayer.
   */
  sv_reinforcement_time: "sv_reinforcement_time",
  /**
   * Integer from -1 to 1.
   * Multiplayer.
   */
  sv_remove_corpse: "sv_remove_corpse",
  /**
   * Integer from -1 to 1.
   * Multiplayer.
   */
  sv_remove_weapon: "sv_remove_weapon",
  /**
   * Command, handled by `CCC_ReturnToBase`.
   * Multiplayer.
   */
  sv_return_to_base: "sv_return_to_base",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_returnplayers: "sv_returnplayers",
  /**
   * Integer from 0 to 60000.
   * Multiplayer.
   */
  sv_rpoint_freeze_time: "sv_rpoint_freeze_time",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_saveconfigs: "sv_saveconfigs",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_savescreenshots: "sv_savescreenshots",
  /**
   * Command, handled by `CCC_StartTimeEnvironment`.
   * Multiplayer.
   */
  sv_setenvtime: "sv_setenvtime",
  /**
   * Set new weather.
   * Multiplayer.
   */
  sv_setweather: "sv_setweather",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_shieldedbases: "sv_shieldedbases",
  /**
   * Integer from 1 to 20.
   * Multiplayer.
   */
  sv_show_player_scores_time: "sv_show_player_scores_time",
  /**
   * Integer from 0 to 1.
   * Multiplayer; Debug and Mixed builds only.
   */
  sv_skip_winner_waiting: "sv_skip_winner_waiting",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_firsteye: "sv_spectr_firsteye",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_freefly: "sv_spectr_freefly",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_freelook: "sv_spectr_freelook",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_lookat: "sv_spectr_lookat",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_teamcamera: "sv_spectr_teamcamera",
  /**
   * Set Start Team Money.
   * Multiplayer.
   */
  sv_startteammoney: "sv_startteammoney",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_statistic_collect: "sv_statistic_collect",
  /**
   * Saving statistic data.
   * Multiplayer.
   */
  sv_statistic_save: "sv_statistic_save",
  /**
   * Shows current server settings.
   * Multiplayer.
   */
  sv_status: "sv_status",
  /**
   * One of the `g_ban_times` values.
   * Multiplayer.
   */
  sv_suspicious_actions_ban_time: "sv_suspicious_actions_ban_time",
  /**
   * Integer from 0 to 100.
   * Multiplayer.
   */
  sv_teamkill_limit: "sv_teamkill_limit",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_teamkill_punish: "sv_teamkill_punish",
  /**
   * Integer from 0 to 180.
   * Multiplayer.
   */
  sv_timelimit: "sv_timelimit",
  /**
   * Command, handled by `CCC_TrafficOptimizationLevel`.
   * Multiplayer.
   */
  sv_traffic_optimization_level: "sv_traffic_optimization_level",
  /**
   * List of banned players see sv_listplayers_banned.
   * Multiplayer.
   */
  sv_unbanplayer: "sv_unbanplayer",
  /**
   * UnBan Player by IP. Format: \"sv_unbanplayer_ip <ip address>\".
   * Multiplayer.
   */
  sv_unbanplayer_ip: "sv_unbanplayer_ip",
  /**
   * Integer from 0 to `0x00FF`.
   * Multiplayer.
   */
  sv_vote_enabled: "sv_vote_enabled",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_vote_participants: "sv_vote_participants",
  /**
   * Number from 0 to 1.
   * Multiplayer.
   */
  sv_vote_quota: "sv_vote_quota",
  /**
   * Number from 0.5 to 10.
   * Multiplayer.
   */
  sv_vote_time: "sv_vote_time",
  /**
   * Stops Current Voting.
   * Multiplayer.
   */
  sv_votestop: "sv_votestop",
  /**
   * Integer from 0 to 1.
   * Multiplayer; Debug and Mixed builds only.
   */
  sv_wait_for_players_ready: "sv_wait_for_players_ready",
  /**
   * Integer from 0 to 3600.
   * Multiplayer.
   */
  sv_warm_up: "sv_warm_up",
  /**
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_write_update_bin: "sv_write_update_bin",
  /**
   * Integer from 0 to 4.
   */
  texture_lod: "texture_lod",
  /**
   * 'on/off' or '1/0'.
   */
  time_dilation_inventory: "time_dilation_inventory",
  /**
   * 'on/off' or '1/0'.
   */
  time_dilation_pda: "time_dilation_pda",
  /**
   * [0.001 - 1000.0].
   * Not in gold builds.
   */
  time_factor: "time_factor",
  /**
   * Command, handled by `CCC_TimeFactorSingle`.
   * Not in gold builds.
   */
  time_factor_single: "time_factor_single",
  /**
   * Command, handled by `CCC_UIRestart`.
   */
  ui_restart: "ui_restart",
  /**
   * Command, handled by `CCC_UIStyle`.
   */
  ui_style: "ui_style",
  /**
   * [0.001 - 1.0].
   */
  ui_time_factor: "ui_time_factor",
  /**
   * Command, handled by `CCC_UnBind`.
   */
  unbind: "unbind",
  /**
   * Command, handled by `CCC_UnBindConsoleCmd`.
   */
  unbind_console: "unbind_console",
  /**
   * Command, handled by `CCC_UnBind`.
   */
  unbind_gpad: "unbind_gpad",
  /**
   * Command, handled by `CCC_UnBind`.
   */
  unbind_sec: "unbind_sec",
  /**
   * Command, handled by `CCC_UnBindAll`.
   */
  unbindall: "unbindall",
  /**
   * One of the `vid_bpp_token` values.
   * Debug and Mixed builds only.
   */
  vid_bpp: "vid_bpp",
  /**
   * Change screen resolution WxH (RHz).
   */
  vid_mode: "vid_mode",
  /**
   * Command, handled by `CCC_VidMonitor`.
   */
  vid_monitor: "vid_monitor",
  /**
   * Command, handled by `CCC_VID_Reset`.
   */
  vid_restart: "vid_restart",
  /**
   * Command, handled by `CCC_VidWindowMode`.
   */
  vid_window_mode: "vid_window_mode",
  /**
   * Integer from 0 to 1.
   */
  wpn_aim_toggle: "wpn_aim_toggle",
} as const;

/**
 * Type describing set of available console commands.
 */
export type TConsoleCommands = typeof consoleCommands;

/**
 * Script type definition enumeration possible command names const.
 */
export type TConsoleCommand = TConsoleCommands[keyof TConsoleCommands];
