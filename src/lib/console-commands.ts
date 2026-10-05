/**
 * Console commands the engine registers, by name: `xray-16`'s `CMD1`-`CMD4` and `CMD_RADIOGROUPMASK2` registrations
 * across the engine, game and renderer modules. A command registered only in some builds says so; check
 * `isConsoleCommandAvailable()` before relying on one at runtime.
 *
 * Generated from the engine sources; regenerate it after an engine adds or removes commands.
 *
 * @inline
 */
export const consoleCommands = {
  /**
   * Applies a graphics quality preset by loading its `rspec_*.ltx` config.
   */
  _preset: "_preset",
  /**
   * Sets the aim angle gap above which NPCs turn at full speed, in radians.
   * Number from 0 to `10.f * PI`.
   */
  ai_aim_max_angle: "ai_aim_max_angle",
  /**
   * Sets the aim angle gap below which NPCs turn at minimum speed, in radians.
   * Number from 0 to `10.f * PI`.
   */
  ai_aim_min_angle: "ai_aim_min_angle",
  /**
   * Sets the slowest body and head turn speed NPCs use while aiming.
   * Number from 0 to `10.f * PI`.
   */
  ai_aim_min_speed: "ai_aim_min_speed",
  /**
   * Sets how far ahead NPCs lead a moving target, in seconds.
   * Number from 0 to 10.
   */
  ai_aim_predict_time: "ai_aim_predict_time",
  /**
   * Slows NPC body and head turning as their aim nears the target.
   * Integer from 0 to 1.
   */
  ai_aim_use_smooth_aim: "ai_aim_use_smooth_aim",
  /**
   * Collects stalker animation and blend usage statistics.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_animation_stats: "ai_animation_stats",
  /**
   * Logs A-Life object spawns, switches, attachments and releases.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_alife: "ai_dbg_alife",
  /**
   * Logs AI animation loading and stalker animation playback.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_anim: "ai_dbg_anim",
  /**
   * Sets an AI debug flag that no code currently reads.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_brain: "ai_dbg_brain",
  /**
   * Draws cover points near the camera.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_cover: "ai_dbg_cover",
  /**
   * Logs destruction of client game objects.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_destroy: "ai_dbg_destroy",
  /**
   * Logs dialog phrase selection and precondition checks.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_dialogs: "ai_dbg_dialogs",
  /**
   * Draws each NPC's vision frustum.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_frustum: "ai_dbg_frustum",
  /**
   * Logs evaluation function results with their input values.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_funcs: "ai_dbg_funcs",
  /**
   * Logs stalker behaviour planner decisions.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_goap: "ai_dbg_goap",
  /**
   * Logs stalker weapon and item handler planner decisions.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_goap_object: "ai_dbg_goap_object",
  /**
   * Logs script action planner decisions.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_goap_script: "ai_dbg_goap_script",
  /**
   * Sets how many frames after spawn NPCs skip their AI thinking.
   * Integer from 0 to 1000000.
   * Debug and Mixed builds only.
   */
  ai_dbg_inactive_time: "ai_dbg_inactive_time",
  /**
   * Logs info portions as characters receive them.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_infoportion: "ai_dbg_infoportion",
  /**
   * Shows monster state machine debug text above monsters.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_monster: "ai_dbg_monster",
  /**
   * Draws NPC movement paths, space restrictions and movement debug shapes.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_motion: "ai_dbg_motion",
  /**
   * Marks a source and a destination level graph vertex by ID.
   * Debug and Mixed builds only.
   */
  ai_dbg_node: "ai_dbg_node",
  /**
   * Logs script binder save and load packet positions.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_serialize: "ai_dbg_serialize",
  /**
   * Logs NPC body and head angles during each sight update.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ai_dbg_sight: "ai_dbg_sight",
  /**
   * Shows memory, sight and behaviour debug text for the viewed stalker.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_stalker: "ai_dbg_stalker",
  /**
   * Shows how close each stalker is to spotting the viewed entity.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_dbg_vision: "ai_dbg_vision",
  /**
   * Draws level graph nodes around the current entity.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_debug: "ai_debug",
  /**
   * Logs NPC waits at locked or blocked doors and door state changes.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ai_debug_doors: "ai_debug_doors",
  /**
   * Lets NPCs trigger and take hits from anomalies they touch.
   * Integer from 0 to 1.
   */
  ai_die_in_anomaly: "ai_die_in_anomaly",
  /**
   * Draws game graph vertices and edges.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph: "ai_draw_game_graph",
  /**
   * Draws the game graph for all levels.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_all: "ai_draw_game_graph_all",
  /**
   * Limits game graph drawing to the current level.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_current_level: "ai_draw_game_graph_current_level",
  /**
   * Limits game graph drawing to the named level, or all levels.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_level: "ai_draw_game_graph_level",
  /**
   * Draws offline A-Life objects on game graph vertices.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_objects: "ai_draw_game_graph_objects",
  /**
   * Draws the game graph at real level positions instead of a raised overview.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_real_pos: "ai_draw_game_graph_real_pos",
  /**
   * Draws offline A-Life stalkers on game graph vertices.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_game_graph_stalkers: "ai_draw_game_graph_stalkers",
  /**
   * Draws vision rays from stalkers to their visible enemy.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_draw_visibility_rays: "ai_draw_visibility_rays",
  /**
   * Makes NPCs ignore the actor in sight, sound and hit memory.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_ignore_actor: "ai_ignore_actor",
  /**
   * Shows a named monster's debug panel in screen column 1 or 2.
   * Debug and Mixed builds only.
   */
  ai_monster_info: "ai_monster_info",
  /**
   * Makes stalkers steer around obstacles while following paths.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_obstacles_avoiding: "ai_obstacles_avoiding",
  /**
   * Makes stalkers wait at moving obstacles instead of rebuilding paths around them.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_obstacles_avoiding_static: "ai_obstacles_avoiding_static",
  /**
   * Logs collected stalker animation and blend usage counts.
   * Debug and Mixed builds only.
   */
  ai_show_animation_stats: "ai_show_animation_stats",
  /**
   * Scales the playback speed of smart cover animations.
   * Number from 0.1 to 10.
   * Debug and Mixed builds only.
   */
  ai_smart_cover_animation_speed_factor: "ai_smart_cover_animation_speed_factor",
  /**
   * Scales smart cover scores against regular covers; lower favours smart covers.
   * Number from 0 to 1000000.
   * Not in gold builds.
   */
  ai_smart_factor: "ai_smart_factor",
  /**
   * Shows code profiler section timings on the statistics screen.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  ai_stats: "ai_stats",
  /**
   * Aims NPC vision checks at random points instead of visible body bones.
   * Integer from 0 to 1.
   */
  ai_use_old_vision: "ai_use_old_vision",
  /**
   * Lets stalkers consider smart covers when choosing cover.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_use_smart_covers: "ai_use_smart_covers",
  /**
   * Sets a smart cover flag whose only reader is compiled out.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  ai_use_smart_covers_animation_slots: "ai_use_smart_covers_animation_slots",
  /**
   * Lets torches carried by NPCs cast dynamic lights.
   * Toggle, `on` or `off`.
   */
  ai_use_torch_dynamic_lights: "ai_use_torch_dynamic_lights",
  /**
   * Sets the time margin used in bullet air-resistance trajectory calculations.
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  air_resistance_epsilon: "air_resistance_epsilon",
  /**
   * Sets how many scheduled ALife objects are processed per update.
   * Not in gold builds.
   */
  al_objects_per_update: "al_objects_per_update",
  /**
   * Takes two game graph vertex IDs and checks them; the path search itself is disabled.
   * Debug and Mixed builds only.
   */
  al_path: "al_path",
  /**
   * Sets the ALife update time budget in microseconds.
   * Not in gold builds.
   */
  al_process_time: "al_process_time",
  /**
   * Sets the distance at which ALife objects switch online and offline.
   * Not in gold builds.
   */
  al_switch_distance: "al_switch_distance",
  /**
   * Sets the margin between the online and offline switch distances.
   * Not in gold builds.
   */
  al_switch_factor: "al_switch_factor",
  /**
   * Sets how fast game time passes relative to real time.
   * Not in gold builds.
   */
  al_time_factor: "al_time_factor",
  /**
   * Binds a game action to a key as its primary binding.
   */
  bind: "bind",
  /**
   * Binds a console command to a key.
   */
  bind_console: "bind_console",
  /**
   * Binds a game action to a gamepad button or axis.
   */
  bind_gpad: "bind_gpad",
  /**
   * Prints every action with its primary, secondary and gamepad bindings.
   */
  bind_list: "bind_list",
  /**
   * Binds a game action to a key as its secondary binding.
   */
  bind_sec: "bind_sec",
  /**
   * Renders every level mesh from six axes to measure its pixel coverage.
   * Debug and Mixed builds only, renderers other than R1 only.
   */
  build_ssa: "build_ssa",
  /**
   * Smoothing factor for camera position and direction changes.
   * Number from 0 to 1.
   */
  cam_inert: "cam_inert",
  /**
   * Smoothing factor for third-person camera distance changes on collision.
   * Number from 0 to 1.
   */
  cam_slide_inert: "cam_slide_inert",
  /**
   * Sets the forward offset of the actor's camera collision shape.
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  camera_collision_character_shift_z: "camera_collision_character_shift_z",
  /**
   * Sets the padding added to the actor's camera collision radius.
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  camera_collision_character_skin_depth: "camera_collision_character_skin_depth",
  /**
   * Sets or clears the CD key and saves it to the registry.
   * Multiplayer.
   */
  cdkey: "cdkey",
  /**
   * Executes the console commands stored in a config file.
   */
  cfg_load: "cfg_load",
  /**
   * Saves all console settings to the given or current config file.
   */
  cfg_save: "cfg_save",
  /**
   * Sends a chat message from the server admin to all players.
   * Multiplayer.
   */
  chat: "chat",
  /**
   * Shows the main menu's no-new-patch message box.
   */
  check_for_updates: "check_for_updates",
  /**
   * Marks the nearest item in first-person view as the pickup target.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  cl_cod_pickup_mode: "cl_cod_pickup_mode",
  /**
   * Maximum simulated network lag in milliseconds for received messages.
   * Integer from 0 to 1000.
   * Multiplayer; Debug and Mixed builds only.
   */
  cl_dbg_max_ping: "cl_dbg_max_ping",
  /**
   * Minimum simulated network lag in milliseconds for received messages.
   * Integer from 0 to 1000.
   * Multiplayer; Debug and Mixed builds only.
   */
  cl_dbg_min_ping: "cl_dbg_min_ping",
  /**
   * Makes the crosshair size follow current weapon dispersion.
   * Toggle, `on` or `off`.
   */
  cl_dynamiccrosshair: "cl_dynamiccrosshair",
  /**
   * Records a demo of each network game the client joins.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  cl_mpdemosave: "cl_mpdemosave",
  /**
   * Votes no in the current vote.
   * Multiplayer.
   */
  cl_voteno: "cl_voteno",
  /**
   * Starts a vote among connected players.
   * Multiplayer.
   */
  cl_votestart: "cl_votestart",
  /**
   * Votes yes in the current vote.
   * Multiplayer.
   */
  cl_voteyes: "cl_voteyes",
  /**
   * Clears the log and flushes it to the log file.
   */
  clear_log: "clear_log",
  /**
   * Resets the collected `smart_cast` statistics.
   * Debug and Mixed builds only.
   */
  clear_smart_cast_stats: "clear_smart_cast_stats",
  /**
   * Sets the console key-repeat interval in seconds.
   * Number from 0.01 to 1.
   */
  con_sensitive: "con_sensitive",
  /**
   * Requests a config dump from every player, for remote admins.
   * Multiplayer.
   */
  config_dump_all: "config_dump_all",
  /**
   * Crashes the game on purpose for testing.
   * Debug and Mixed builds only.
   */
  crash: "crash",
  /**
   * Starts or stops live tuning of an attached item's bind offsets.
   * Debug and Mixed builds only.
   */
  dbg_adjust_attachable_item: "dbg_adjust_attachable_item",
  /**
   * Shows moving-bone sound speed and pitch factors on screen.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_bones_snd_player: "dbg_bones_snd_player",
  /**
   * Clears the active task for every task type.
   */
  dbg_cleanup_tasks: "dbg_cleanup_tasks",
  /**
   * Logs server-side object destruction.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_destroy: "dbg_destroy",
  /**
   * Draws the actor's collision bone shapes.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_actor_alive: "dbg_draw_actor_alive",
  /**
   * Draws actor network interpolation markers and dead-actor bone states.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_actor_dead: "dbg_draw_actor_dead",
  /**
   * Draws the actor's character physics controller.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_actor_phys: "dbg_draw_actor_phys",
  /**
   * Draws bones and root transforms of animation-driven movement.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_animation_movement_controller: "dbg_draw_animation_movement_controller",
  /**
   * Draws the actor's item auto-pickup box.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_autopickupbox: "dbg_draw_autopickupbox",
  /**
   * Draws bullet paths and ricochet, stop and pierce points.
   * Debug and Mixed builds only.
   */
  dbg_draw_bullet_hit: "dbg_draw_bullet_hit",
  /**
   * Draws actor camera viewports and camera collision contacts.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_camera_collision: "dbg_draw_camera_collision",
  /**
   * Marks every gear on the car engine torque plot.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_car_plots_all_trans: "dbg_draw_car_plots_all_trans",
  /**
   * Draws character bones in their bind pose.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_character_binds: "dbg_draw_character_binds",
  /**
   * Draws character bone axes and weapon collision geometry.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_character_bones: "dbg_draw_character_bones",
  /**
   * Draws the character physics shell geometry.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_character_physics: "dbg_draw_character_physics",
  /**
   * Draws the axes of each character physics shell element.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_character_physics_pones: "dbg_draw_character_physics_pones",
  /**
   * Draws the boxes of climbable objects such as ladders.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_climbable: "dbg_draw_climbable",
  /**
   * Sets a detector draw flag that no code currently reads.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_customdetector: "dbg_draw_customdetector",
  /**
   * Draws the shapes of space restrictors and anomaly zones.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_customzone: "dbg_draw_customzone",
  /**
   * Draws physics door axes and open and closed directions.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_doors: "dbg_draw_doors",
  /**
   * Draws a crosshair marking the first bullet's dispersion.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_fb_crosshair: "dbg_draw_fb_crosshair",
  /**
   * Draws bounding boxes of inventory items.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_invitem: "dbg_draw_invitem",
  /**
   * Shows speed, gear, engine and fuel data for the driven car.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_car_dynamics: "dbg_draw_ph_car_dynamics",
  /**
   * Plots engine power, torque and rpm of the driven car.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_car_plots: "dbg_draw_ph_car_plots",
  /**
   * Shows counts of cached collision triangles.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_cashed_tries_stats: "dbg_draw_ph_cashed_tries_stats",
  /**
   * Draws physics contact points.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_contacts: "dbg_draw_ph_contacts",
  /**
   * Draws the activation boxes used to place newly activated physics shells.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_death_boxes: "dbg_draw_ph_death_boxes",
  /**
   * Draws bounding boxes of active physics objects.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_enabled_aabbs: "dbg_draw_ph_enabled_aabbs",
  /**
   * Draws rocket explosion contact points.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_explosion_position: "dbg_draw_ph_explosion_position",
  /**
   * Draws explosion rays and blast checks and logs damage effect.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_explosions: "dbg_draw_ph_explosions",
  /**
   * Draws stalker hit-animation base axes and hit directions.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_hit_anims: "dbg_draw_ph_hit_anims",
  /**
   * Draws where hits are applied to physics bodies.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_hit_app_pos: "dbg_draw_ph_hit_app_pos",
  /**
   * Draws foot IK blending state at the toes.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_blending: "dbg_draw_ph_ik_blending",
  /**
   * Draws foot IK ground collision tests and hit triangles.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_collision: "dbg_draw_ph_ik_collision",
  /**
   * Draws limb IK goal points and matrices.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_goal: "dbg_draw_ph_ik_goal",
  /**
   * Draws limb IK joint rotation limits.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_limits: "dbg_draw_ph_ik_limits",
  /**
   * Draws predicted and current foot IK goals.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_predict: "dbg_draw_ph_ik_predict",
  /**
   * Draws the body shift applied to fit IK feet.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ik_shift_object: "dbg_draw_ph_ik_shift_object",
  /**
   * Draws cached level triangles overlapping a body's bounding box.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_intersected_tries: "dbg_draw_ph_intersected_tries",
  /**
   * Draws the mass centres of physics bodies.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_mass_centres: "dbg_draw_ph_mass_centres",
  /**
   * Draws level triangles a body's centre lies behind.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_negative_tries: "dbg_draw_ph_negative_tries",
  /**
   * Draws level triangles a body's centre lies in front of.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_positive_tries: "dbg_draw_ph_positive_tries",
  /**
   * Draws motion rays that physics objects trace against the world.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_ray_motions: "dbg_draw_ph_ray_motions",
  /**
   * Draws the saved triangles a body is being pushed out of.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_saved_tries: "dbg_draw_ph_saved_tries",
  /**
   * Shows physics object, body, joint and contact counts.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_statistics: "dbg_draw_ph_statistics",
  /**
   * Draws where a body's motion crosses a triangle plane.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_tri_point: "dbg_draw_ph_tri_point",
  /**
   * Draws the box used to query level triangles for collision.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_tri_test_aabb: "dbg_draw_ph_tri_test_aabb",
  /**
   * Draws the motion segment traced against crossed triangles.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_tri_trace: "dbg_draw_ph_tri_trace",
  /**
   * Draws triangles a body's centre crossed since the last step.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_tries_changes_sign: "dbg_draw_ph_tries_changes_sign",
  /**
   * Draws physics debug shapes without depth testing.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_ph_zbuffer_disable: "dbg_draw_ph_zbuffer_disable",
  /**
   * Draws ragdoll shell geometry at each stage of its activation.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_draw_ragdoll_spawn: "dbg_draw_ragdoll_spawn",
  /**
   * Draws artefact spawn points in Artefact Hunt games.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_rp: "dbg_draw_rp",
  /**
   * Draws skeletons of nearby unattached objects.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_skeleton: "dbg_draw_skeleton",
  /**
   * Draws multiplayer team base zone shapes.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_draw_teamzone: "dbg_draw_teamzone",
  /**
   * Logs warnings when a frame needs too many physics steps.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_dump_physics_step: "dbg_dump_physics_step",
  /**
   * Draws collisions and logs depth during interactive death motions.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_imotion_collide_debug: "dbg_imotion_collide_debug",
  /**
   * Draws physics bone axes during interactive death motions.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_imotion_draw_skeleton: "dbg_imotion_draw_skeleton",
  /**
   * Draws physics shell velocities during interactive death motions.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_imotion_draw_velocity: "dbg_imotion_draw_velocity",
  /**
   * Sets the length scale of interactive motion velocity lines.
   * Number from 0.0001 to 100.
   * Debug and Mixed builds only.
   */
  dbg_imotion_draw_velocity_scale: "dbg_imotion_draw_velocity_scale",
  /**
   * Captures a screenshot of the server's own client.
   * Multiplayer; Debug and Mixed builds only.
   */
  dbg_make_screenshot: "dbg_make_screenshot",
  /**
   * Logs actor character restriction size changes.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_actor_restriction: "dbg_ph_actor_restriction",
  /**
   * Meant to force physics-checked NPC movement; the check as written bypasses it.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ai_always_phmove: "dbg_ph_ai_always_phmove",
  /**
   * Moves NPCs by direct positioning with character collision off.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ai_never_phmove: "dbg_ph_ai_never_phmove",
  /**
   * Clears persistent cached physics debug drawings.
   * Debug and Mixed builds only.
   */
  dbg_ph_cashed_clear: "dbg_ph_cashed_clear",
  /**
   * Draws character controller forces, contacts and airborne state.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_character_control: "dbg_ph_character_control",
  /**
   * Sets an IK debug flag whose only reader is commented out.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ik: "dbg_ph_ik",
  /**
   * Applies joint rotation limits when solving limb IK.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ik_limits: "dbg_ph_ik_limits",
  /**
   * Disables limb IK updates.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ik_off: "dbg_ph_ik_off",
  /**
   * Draws ladder boxes and logs ladder climbing state changes.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_ladder: "dbg_ph_ladder",
  /**
   * Logs energy breakdowns of character collision damage.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_ph_obj_collision_damage: "dbg_ph_obj_collision_damage",
  /**
   * Sets the minimum collision velocity whose damage breakdown is logged.
   * Number from 0 to 1000.
   * Debug and Mixed builds only.
   */
  dbg_ph_vel_collid_damage_to_display: "dbg_ph_vel_collid_damage_to_display",
  /**
   * Shows the actor's current animations and movement state on screen.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  dbg_show_ani_info: "dbg_show_ani_info",
  /**
   * Verifies shared strings for memory corruption.
   * Debug and Mixed builds only.
   */
  dbg_str_check: "dbg_str_check",
  /**
   * Writes all shared strings to a dump file.
   * Debug and Mixed builds only.
   */
  dbg_str_dump: "dbg_str_dump",
  /**
   * Scales the font height of physics debug text.
   * Number from 0.2 to 5.
   * Debug and Mixed builds only.
   */
  dbg_text_height_scale: "dbg_text_height_scale",
  /**
   * Names the object to trace physics and animation debug for; none stops.
   * Debug and Mixed builds only.
   */
  dbg_track_obj: "dbg_track_obj",
  /**
   * Shows each tracked blend's amount and power.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_ammount: "dbg_track_obj_blends_ammount",
  /**
   * Shows the tracked object's animation blends for bone part 0.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_bp_0: "dbg_track_obj_blends_bp_0",
  /**
   * Shows the tracked object's animation blends for bone part 1.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_bp_1: "dbg_track_obj_blends_bp_1",
  /**
   * Shows the tracked object's animation blends for bone part 2.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_bp_2: "dbg_track_obj_blends_bp_2",
  /**
   * Shows the tracked object's animation blends for bone part 3.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_bp_3: "dbg_track_obj_blends_bp_3",
  /**
   * Dumps the tracked object's animation blends to the log once.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_dump: "dbg_track_obj_blends_dump",
  /**
   * Shows each tracked blend's bone part, channel and end flags.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_flags: "dbg_track_obj_blends_flags",
  /**
   * Shows each tracked blend's accrue, falloff and speed.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_mix_params: "dbg_track_obj_blends_mix_params",
  /**
   * Shows each tracked blend's motion and motion set names.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_motion_name: "dbg_track_obj_blends_motion_name",
  /**
   * Shows each tracked blend's state and playing flags.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_state: "dbg_track_obj_blends_state",
  /**
   * Shows each tracked blend's current time, total time and frame.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  dbg_track_obj_blends_time: "dbg_track_obj_blends_time",
  /**
   * Shows or sets a named AI debug variable.
   * Debug and Mixed builds only.
   */
  dbg_var: "dbg_var",
  /**
   * Logs death animation loading and selection details.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  death_anim_debug: "death_anim_debug",
  /**
   * Intended to select velocity-based death animations; the engine ignores it.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  death_anim_velocity: "death_anim_velocity",
  /**
   * Logs which material each character loads.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_character_material_load: "debug_character_material_load",
  /**
   * Logs each game object as it is destroyed.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_destroy: "debug_destroy",
  /**
   * Logs the bone names of the given model.
   * Debug and Mixed builds only.
   */
  debug_dump_model_bones: "debug_dump_model_bones",
  /**
   * Opens a dialog that previews the UI fonts.
   * Debug and Mixed builds only.
   */
  debug_fonts: "debug_fonts",
  /**
   * Shows recent error messages in red over the screen.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_show_red_text: "debug_show_red_text",
  /**
   * Logs character animations that have no step parameters.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_step_info: "debug_step_info",
  /**
   * Logs step parameter loading for characters.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  debug_step_info_load: "debug_step_info_load",
  /**
   * Resets all bindings to defaults and loads `default_controls.ltx`.
   */
  default_controls: "default_controls",
  /**
   * Plays the named camera demo, optionally looped as `name,loops`.
   */
  demo_play: "demo_play",
  /**
   * Starts a free camera demo recording to the named file.
   */
  demo_record: "demo_record",
  /**
   * Moves the demo recording camera to the given position.
   */
  demo_set_cam_position: "demo_set_cam_position",
  /**
   * Turns off lens flare sprites.
   * Integer from 0 to 1.
   */
  disable_lens_flare: "disable_lens_flare",
  /**
   * Disconnects from the current game and unloads the level.
   */
  disconnect: "disconnect",
  /**
   * Shows progress of incoming screenshot and config downloads.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  draw_downloads: "draw_downloads",
  /**
   * Logs the level's active, sleeping and pending-destroy objects.
   * Debug and Mixed builds only.
   */
  dump_all_objects: "dump_all_objects",
  /**
   * Logs the names of all creatures on the current level.
   * Debug and Mixed builds only.
   */
  dump_creatures: "dump_creatures",
  /**
   * Logs all info portions the actor has.
   * Debug and Mixed builds only.
   */
  dump_infos: "dump_infos",
  /**
   * Logs all current map locations.
   * Debug and Mixed builds only.
   */
  dump_map: "dump_map",
  /**
   * Logs files tracked by the file system: open with 1, released otherwise.
   * Debug and Mixed builds only.
   */
  dump_open_files: "dump_open_files",
  /**
   * Dumps the model pool and loaded render resources to the log.
   * Not in gold builds.
   */
  dump_resources: "dump_resources",
  /**
   * Logs all tasks the actor has.
   * Debug and Mixed builds only.
   */
  dump_tasks: "dump_tasks",
  /**
   * Prints all registered engine events with their reference counts.
   * Debug and Mixed builds only.
   */
  e_list: "e_list",
  /**
   * Signals a named engine event with an optional parameter.
   * Debug and Mixed builds only.
   */
  e_signal: "e_signal",
  /**
   * Number of recent error lines shown in red on screen.
   * Integer from 6 to 1024.
   * Debug and Mixed builds only.
   */
  error_line_count: "error_line_count",
  /**
   * Writes the log buffer to the log file.
   */
  flush: "flush",
  /**
   * Sets the camera field of view in degrees.
   * Number from 5 to 180.
   */
  fov: "fov",
  /**
   * Uses controller motion sensors for aiming even when not zoomed.
   * Toggle, `on` or `off`.
   */
  g_always_use_attitude_sensors: "g_always_use_attitude_sensors",
  /**
   * Automatically picks up nearby items in multiplayer.
   * Toggle, `on` or `off`.
   */
  g_autopickup: "g_autopickup",
  /**
   * Stores the backward running option; no engine code reads it.
   * Toggle, `on` or `off`.
   */
  g_backrun: "g_backrun",
  /**
   * Scales the simulation time step of flying bullets.
   * Number from 0 to 10.
   * Debug and Mixed builds only.
   */
  g_bullet_time_factor: "g_bullet_time_factor",
  /**
   * Maximum number of player corpses kept on the map.
   * Integer from 0 to 100.
   * Multiplayer.
   */
  g_corpsenum: "g_corpsenum",
  /**
   * Makes the crouch key toggle crouching instead of holding it.
   * Toggle, `on` or `off`.
   */
  g_crouch_toggle: "g_crouch_toggle",
  /**
   * Sets the maximum UI cursor speed for controller stick movement.
   * Number from 1 to 100.
   */
  g_cursor_intensity_max: "g_cursor_intensity_max",
  /**
   * Sets the starting UI cursor speed for controller stick movement.
   * Number from 1 to 100.
   */
  g_cursor_intensity_min: "g_cursor_intensity_min",
  /**
   * Sets how fast the controller UI cursor speed ramps up.
   * Number from 0 to 10.
   */
  g_cursor_intensity_step: "g_cursor_intensity_step",
  /**
   * Enables dynamic music; scripts read it through `IsDynamicMusic`.
   * Toggle, `on` or `off`.
   */
  g_dynamic_music: "g_dynamic_music",
  /**
   * Milliseconds added to the timestamps of received game events.
   * Integer from 0 to 1000.
   * Multiplayer.
   */
  g_eventdelay: "g_eventdelay",
  /**
   * Keeps the first-person camera when the actor dies.
   * Integer from 0 to 1.
   */
  g_first_person_death: "g_first_person_death",
  /**
   * Sets the single-player game difficulty.
   */
  g_game_difficulty: "g_game_difficulty",
  /**
   * Makes the actor invulnerable.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  g_god: "g_god",
  /**
   * Enables story autosaves; scripts read it through `IsImportantSave`.
   * Toggle, `on` or `off`.
   */
  g_important_save: "g_important_save",
  /**
   * Highlights equipped items in inventory lists and keeps them unstacked.
   * Integer from 0 to 1.
   */
  g_inv_highlight_equipped: "g_inv_highlight_equipped",
  /**
   * Kills the local player's character.
   * Multiplayer.
   */
  g_kill: "g_kill",
  /**
   * Sets the game language and reloads translated text.
   */
  g_language: "g_language",
  /**
   * Stores the language last read from `localization.ltx` to detect changes.
   * Text, at most `std::size(CStringTable::LanguageIDInLTX)` characters.
   */
  g_language_ltx: "g_language_ltx",
  /**
   * Shows loading stage titles on the loading screen.
   * Toggle, `on` or `off`.
   */
  g_loading_stages: "g_loading_stages",
  /**
   * Sets the maximum camera turn speed for controller stick look.
   * Number from 10 to 100.
   */
  g_look_intensity_max: "g_look_intensity_max",
  /**
   * Sets the starting camera turn speed for controller stick look.
   * Number from 10 to 100.
   */
  g_look_intensity_min: "g_look_intensity_min",
  /**
   * Sets how fast controller stick look speed ramps up.
   * Number from 0 to 10.
   */
  g_look_intensity_step: "g_look_intensity_step",
  /**
   * Keeps picking up items while the use key is held.
   * Toggle, `on` or `off`.
   */
  g_multi_item_pickup: "g_multi_item_pickup",
  /**
   * Toggles no-clip movement for the actor.
   * Not in gold builds.
   */
  g_no_clip: "g_no_clip",
  /**
   * Ignores weapons' `control_inertion_factor` so aim sensitivity stays constant.
   * Integer from 0 to 1.
   */
  g_normalize_mouse_sens: "g_normalize_mouse_sens",
  /**
   * Ignores `control_inertion_factor` changes from weapon upgrades.
   * Integer from 0 to 1.
   */
  g_normalize_upgrade_mouse_sens: "g_normalize_upgrade_mouse_sens",
  /**
   * Ends the current round and restarts the game.
   * Multiplayer.
   */
  g_restart: "g_restart",
  /**
   * Restarts the round without waiting for players to be ready.
   * Multiplayer.
   */
  g_restart_fast: "g_restart_fast",
  /**
   * Shifts the time shown on the engine sleep dialog's clock strip, in hours.
   * Integer from 1 to 24.
   */
  g_sleep_time: "g_sleep_time",
  /**
   * Spawns the given section at the actor's position.
   * Not in gold builds.
   */
  g_spawn: "g_spawn",
  /**
   * Spawns the given item section into the actor's inventory.
   * Not in gold builds.
   */
  g_spawn_to_inventory: "g_spawn_to_inventory",
  /**
   * Swaps the teams and quickly restarts the round.
   * Multiplayer.
   */
  g_swapteams: "g_swapteams",
  /**
   * Gives the actor unlimited ammunition.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  g_unlimitedammo: "g_unlimitedammo",
  /**
   * Unloads the magazine of picked-up weapons placed in the backpack.
   * Integer from 0 to 1.
   */
  g_unload_ammo_after_pick_up: "g_unload_ammo_after_pick_up",
  /**
   * Draws bullet tracers.
   * Toggle, `on` or `off`.
   */
  g_use_tracers: "g_use_tracers",
  /**
   * Seconds before a UI cursor that is no longer needed hides.
   * Number from 0.5 to 3.
   */
  gamepad_cursor_autohide_time: "gamepad_cursor_autohide_time",
  /**
   * Inverts horizontal look on the gamepad.
   * Toggle, `on` or `off`.
   */
  gamepad_invert_x: "gamepad_invert_x",
  /**
   * Inverts vertical look on the gamepad.
   * Toggle, `on` or `off`.
   */
  gamepad_invert_y: "gamepad_invert_y",
  /**
   * Gyroscope motion threshold below which motion is ignored.
   * Number from 0.001 to 1.
   */
  gamepad_sensor_deadzone: "gamepad_sensor_deadzone",
  /**
   * Gamepad gyroscope look sensitivity.
   * Number from 0.01 to 3.
   */
  gamepad_sensor_sens: "gamepad_sensor_sens",
  /**
   * Enables gamepad gyroscope input.
   * Toggle, `on` or `off`.
   */
  gamepad_sensors_enable: "gamepad_sensors_enable",
  /**
   * Stick deflection fraction below which input is ignored.
   * Number from 0 to 1.
   */
  gamepad_stick_inner_deadzone: "gamepad_stick_inner_deadzone",
  /**
   * Stick deflection fraction treated as full input.
   * Number from 0 to 1.
   */
  gamepad_stick_outer_deadzone: "gamepad_stick_outer_deadzone",
  /**
   * Horizontal look sensitivity of the gamepad stick.
   * Number from 0.00001 to 2.
   */
  gamepad_stick_sens_x: "gamepad_stick_sens_x",
  /**
   * Vertical look sensitivity of the gamepad stick.
   * Number from 0.00001 to 2.
   */
  gamepad_stick_sens_y: "gamepad_stick_sens_y",
  /**
   * Prints the server's IP address and port.
   * Multiplayer.
   */
  get_server_address: "get_server_address",
  /**
   * Creates a GameSpy account from nick, unique nick, email and password.
   * Multiplayer.
   */
  gs_create_account: "gs_create_account",
  /**
   * Deletes the current GameSpy profile.
   * Multiplayer.
   */
  gs_delete_profile: "gs_delete_profile",
  /**
   * Lists the GameSpy profiles of an account by email and password.
   * Multiplayer.
   */
  gs_list_profiles: "gs_list_profiles",
  /**
   * Logs in to GameSpy with email, nick and password.
   * Multiplayer.
   */
  gs_login: "gs_login",
  /**
   * Logs out of the GameSpy session.
   * Multiplayer.
   */
  gs_logout: "gs_logout",
  /**
   * Prints the current GameSpy profile ID and unique nick.
   * Multiplayer.
   */
  gs_print_profile: "gs_print_profile",
  /**
   * Loads the logged-in player's stored GameSpy profile data.
   * Multiplayer.
   */
  gs_profile: "gs_profile",
  /**
   * Registers a new unique nick for the current GameSpy profile.
   * Multiplayer.
   */
  gs_register_unique_nick: "gs_register_unique_nick",
  /**
   * Asks GameSpy to suggest available unique nicks.
   * Multiplayer.
   */
  gs_suggest_unicks: "gs_suggest_unicks",
  /**
   * Prints every console command with its value and help text.
   */
  help: "help",
  /**
   * Hides the console.
   */
  hide: "hide",
  /**
   * Sets the playback fraction before which a repeated hit reaction is skipped.
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  hit_anims_block_blend: "hit_anims_block_blend",
  /**
   * Sets the blend weight of the hit reaction animation channel.
   * Number from 0 to 100.
   * Debug and Mixed builds only.
   */
  hit_anims_channel_factor: "hit_anims_channel_factor",
  /**
   * Sets the strength multiplier of character hit reaction animations.
   * Number from 0 to 100.
   * Debug and Mixed builds only.
   */
  hit_anims_power: "hit_anims_power",
  /**
   * Sets the playback fraction before which a repeated hit reaction is weakened.
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  hit_anims_reduce_blend: "hit_anims_reduce_blend",
  /**
   * Sets the strength multiplier for weakened repeated hit reactions.
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  hit_anims_reduce_blend_factor: "hit_anims_reduce_blend_factor",
  /**
   * Sets the extra strength multiplier for turning hit reactions.
   * Number from 0 to 100.
   * Debug and Mixed builds only.
   */
  hit_anims_rotational_power: "hit_anims_rotational_power",
  /**
   * Sets how sideways a hit must be to play a side reaction.
   * Number from 0 to 10.
   * Debug and Mixed builds only.
   */
  hit_anims_side_sensitivity_threshold: "hit_anims_side_sensitivity_threshold",
  /**
   * Applies the `hit_anims_*` tuning values when characters set up hit animations.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  hit_anims_tune: "hit_anims_tune",
  /**
   * Enables binocular target highlighting while zoomed.
   * Toggle, `on` or `off`.
   */
  hud_binocular_vision: "hud_binocular_vision",
  /**
   * Shows the crosshair.
   * Toggle, `on` or `off`.
   */
  hud_crosshair: "hud_crosshair",
  /**
   * Shows the distance to the object under the crosshair.
   * Toggle, `on` or `off`.
   */
  hud_crosshair_dist: "hud_crosshair_dist",
  /**
   * Shows the in-game HUD indicators.
   * Toggle, `on` or `off`.
   */
  hud_draw: "hud_draw",
  /**
   * Sets the weapon HUD field of view as a fraction of the camera's.
   * Number from 0.1 to 1.
   */
  hud_fov: "hud_fov",
  /**
   * Shows the name and faction of characters under the crosshair.
   * Toggle, `on` or `off`.
   */
  hud_info: "hud_info",
  /**
   * Mirrors the first-person weapon HUD for left-handed view.
   * Toggle, `on` or `off`.
   */
  hud_left_handed: "hud_left_handed",
  /**
   * Shows the first-person weapon and hands.
   * Toggle, `on` or `off`.
   */
  hud_weapon: "hud_weapon",
  /**
   * Aligns foot rotation to the ground when computing foot IK goals.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_allign_free_foot: "ik_allign_free_foot",
  /**
   * Blends foot IK goals for feet that are not stepping.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_blend_free_foot: "ik_blend_free_foot",
  /**
   * Shifts the actor camera height with foot IK in multiplayer.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_cam_shift: "ik_cam_shift",
  /**
   * Sets how fast the actor camera height follows stance changes.
   * Number from 1 to 10.
   * Debug and Mixed builds only.
   */
  ik_cam_shift_interpolation: "ik_cam_shift_interpolation",
  /**
   * Sets the smoothing speed of the foot IK camera height shift.
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_cam_shift_speed: "ik_cam_shift_speed",
  /**
   * Sets the height change that triggers foot IK camera shift smoothing.
   * Number from 0 to 2.
   * Debug and Mixed builds only.
   */
  ik_cam_shift_tolerance: "ik_cam_shift_tolerance",
  /**
   * Re-tests blended foot IK goals against the ground.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_collide_blend: "ik_collide_blend",
  /**
   * Blends free-foot IK goals relative to their previous goal.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  ik_local_blending: "ik_local_blending",
  /**
   * Captures the mouse in relative mode while input is grabbed.
   */
  input_exclusive_mode: "input_exclusive_mode",
  /**
   * Drops all backpack items while the inventory is open; `1` includes quest items.
   * Debug and Mixed builds only.
   */
  inv_drop_all_items: "inv_drop_all_items",
  /**
   * Logs the upgrades of the item open in the upgrade menu.
   * Debug and Mixed builds only.
   */
  inv_upgrades_cur_item: "inv_upgrades_cur_item",
  /**
   * Logs the full inventory upgrade hierarchy.
   * Debug and Mixed builds only.
   */
  inv_upgrades_hierarchy: "inv_upgrades_hierarchy",
  /**
   * Logs inventory upgrade checks and installations.
   * Integer from 0 to 1.
   * Debug and Mixed builds only.
   */
  inv_upgrades_log: "inv_upgrades_log",
  /**
   * Moves the actor to the named level.
   * Not in gold builds.
   */
  jump_to_level: "jump_to_level",
  /**
   * Waits for a key press after a level finishes loading.
   * Integer from 0 to 1.
   */
  keypress_on_start: "keypress_on_start",
  /**
   * Prints the names of all bindable actions.
   */
  list_actions: "list_actions",
  /**
   * Loads the named saved game.
   */
  load: "load",
  /**
   * Loads the last saved game, or remembers the given save name.
   */
  load_last_save: "load_last_save",
  /**
   * Logs when a scripted entity action is removed.
   * Toggle, `on` or `off`.
   */
  lua_debug: "lua_debug",
  /**
   * Sets how deeply Lua error dumps expand locals and tables.
   * Integer from 0 to 16.
   */
  lua_dump_depth: "lua_dump_depth",
  /**
   * Selects the per-update Lua garbage collection mode, or runs a full collection.
   */
  lua_gc_method: "lua_gc_method",
  /**
   * Sets the Lua garbage collection time budget per update, in microseconds.
   * Integer from 1000 to 16000.
   */
  lua_gc_timeout: "lua_gc_timeout",
  /**
   * Sets the Lua garbage collection step size per update, in kilobytes.
   * Integer from 1 to 1000.
   */
  lua_gcstep: "lua_gcstep",
  /**
   * Opens or closes the main menu; accepts on/off.
   */
  main_menu: "main_menu",
  /**
   * Requests a config dump from a player by session ID, for remote admins.
   * Multiplayer.
   */
  make_config_dump: "make_config_dump",
  /**
   * Requests a screenshot from a player by session ID, for remote admins.
   * Multiplayer.
   */
  make_screenshot: "make_screenshot",
  /**
   * Stores a main-menu "dedicated server" flag that no code or UI reads.
   * Toggle, `on` or `off`.
   */
  mm_mm_net_srv_dedicated: "mm_mm_net_srv_dedicated",
  /**
   * Stores a main-menu "public server" flag that no code or UI reads.
   * Toggle, `on` or `off`.
   */
  mm_net_con_publicserver: "mm_net_con_publicserver",
  /**
   * Remembers the create-server menu's spectator switch interval in seconds.
   * Integer from 1 to 32.
   */
  mm_net_con_spectator: "mm_net_con_spectator",
  /**
   * Remembers whether the create-server menu starts the host as spectator.
   * Toggle, `on` or `off`.
   */
  mm_net_con_spectator_on: "mm_net_con_spectator_on",
  /**
   * Remembers the server browser filter that shows empty servers.
   * Toggle, `on` or `off`.
   */
  mm_net_filter_empty: "mm_net_filter_empty",
  /**
   * Remembers the server browser filter that shows full servers.
   * Toggle, `on` or `off`.
   */
  mm_net_filter_full: "mm_net_filter_full",
  /**
   * Remembers the server browser filter that shows listen servers.
   * Toggle, `on` or `off`.
   */
  mm_net_filter_listen: "mm_net_filter_listen",
  /**
   * Remembers the server browser filter that shows password-protected servers.
   * Toggle, `on` or `off`.
   */
  mm_net_filter_pass: "mm_net_filter_pass",
  /**
   * Remembers the server browser filter that shows servers without friendly fire.
   * Toggle, `on` or `off`.
   */
  mm_net_filter_wo_ff: "mm_net_filter_wo_ff",
  /**
   * Remembers the server browser filter that shows servers without a password.
   * Toggle, `on` or `off`.
   */
  mm_net_filter_wo_pass: "mm_net_filter_wo_pass",
  /**
   * Sets the multiplayer player name and saves it to the registry.
   */
  mm_net_player_name: "mm_net_player_name",
  /**
   * Remembers the game mode chosen in the create-server menu.
   * One of the `g_GameModes` values.
   */
  mm_net_srv_gamemode: "mm_net_srv_gamemode",
  /**
   * Remembers the player limit chosen in the create-server menu.
   * Integer from 2 to 32.
   */
  mm_net_srv_maxplayers: "mm_net_srv_maxplayers",
  /**
   * Remembers the server name entered in the create-server menu.
   * Text, at most `sizeof(m_serverName)` characters.
   */
  mm_net_srv_name: "mm_net_srv_name",
  /**
   * Remembers the respawn mode tab chosen in the create-server menu.
   * Text, at most `sizeof(reinforcementType)` characters.
   */
  mm_net_srv_reinforcement_type: "mm_net_srv_reinforcement_type",
  /**
   * Remembers the create-server menu's weather time-speed multiplier.
   * Number from 0 to 100.
   */
  mm_net_weather_rateofchange: "mm_net_weather_rateofchange",
  /**
   * Inverts vertical mouse look.
   * Toggle, `on` or `off`.
   */
  mouse_invert: "mouse_invert",
  /**
   * Mouse look sensitivity.
   * Number from 0.001 to 0.6.
   */
  mouse_sens: "mouse_sens",
  /**
   * Cancels the pending pause set by `mpdemoplay_pause_on`.
   * Multiplayer.
   */
  mpdemoplay_cancel_pause_on: "mpdemoplay_cancel_pause_on",
  /**
   * Halves the demo playback speed.
   * Multiplayer.
   */
  mpdemoplay_divspeed: "mpdemoplay_divspeed",
  /**
   * Doubles the demo playback speed.
   * Multiplayer.
   */
  mpdemoplay_mulspeed: "mpdemoplay_mulspeed",
  /**
   * Plays the demo until a given event, then pauses.
   * Multiplayer.
   */
  mpdemoplay_pause_on: "mpdemoplay_pause_on",
  /**
   * Restarts the demo being played.
   * Multiplayer.
   */
  mpdemoplay_restart: "mpdemoplay_restart",
  /**
   * Rewinds the demo until a given event, then pauses.
   * Multiplayer.
   */
  mpdemoplay_rewind_until: "mpdemoplay_rewind_until",
  /**
   * Sets the demo playback speed.
   * Multiplayer.
   */
  mpdemoplay_speed_set: "mpdemoplay_speed_set",
  /**
   * Stops rewinding started by `mpdemoplay_rewind_until`.
   * Multiplayer.
   */
  mpdemoplay_stop_rewind: "mpdemoplay_stop_rewind",
  /**
   * Meant to run AI vision in parallel; the code hard-disables it.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_ai_vision: "mt_ai_vision",
  /**
   * Runs A-Life updates as parallel frame tasks.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_alife: "mt_alife",
  /**
   * Runs bullet simulation as a parallel frame task.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_bullets: "mt_bullets",
  /**
   * Builds NPC detail paths as parallel frame tasks.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_detail_path: "mt_detail_path",
  /**
   * Builds NPC level graph paths as parallel frame tasks.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_level_path: "mt_level_path",
  /**
   * Updates static level sounds as a parallel frame task.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_level_sounds: "mt_level_sounds",
  /**
   * Updates the map manager as a parallel frame task.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_map: "mt_map",
  /**
   * Runs network processing on the parallel frame thread.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  mt_network: "mt_network",
  /**
   * Updates stalker weapon and item handling as parallel frame tasks.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_object_handler: "mt_object_handler",
  /**
   * Flag for multithreaded particle updates that nothing reads.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  mt_particles: "mt_particles",
  /**
   * Runs physics updates on the parallel frame thread.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  mt_physics: "mt_physics",
  /**
   * Runs the Lua garbage collection step as a parallel frame task.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_script_gc: "mt_script_gc",
  /**
   * Flag for multithreaded sound updates that nothing reads.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  mt_sound: "mt_sound",
  /**
   * Updates NPC sound players as parallel frame tasks.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  mt_sound_player: "mt_sound_player",
  /**
   * Changes the local player's name.
   * Multiplayer.
   */
  name: "name",
  /**
   * Clears the client's network statistics.
   * Multiplayer.
   */
  net_cl_clearstats: "net_cl_clearstats",
  /**
   * Number of interpolated positions kept for debug path drawing.
   * Integer from 0 to 2000.
   * Multiplayer.
   */
  net_cl_icurvesize: "net_cl_icurvesize",
  /**
   * Curve used to interpolate remote actor positions: linear, B-spline or Hermite.
   * Integer from 0 to 2.
   * Multiplayer.
   */
  net_cl_icurvetype: "net_cl_icurvetype",
  /**
   * Interpolation time in seconds for remote objects; zero is automatic, negative disables it.
   * Number from -1 to 1.
   * Multiplayer.
   */
  net_cl_interpolation: "net_cl_interpolation",
  /**
   * Logs client network packets.
   * Toggle, `on` or `off`.
   * Multiplayer.
   */
  net_cl_log_data: "net_cl_log_data",
  /**
   * Queued outgoing packets above which the client skips sending updates.
   * Integer from 0 to 10.
   * Multiplayer; Debug and Mixed builds only.
   */
  net_cl_pending_lim: "net_cl_pending_lim",
  /**
   * Resynchronizes the client's network clock with the server.
   * Multiplayer.
   */
  net_cl_resync: "net_cl_resync",
  /**
   * Client network updates sent per second.
   * Integer from 20 to 100.
   * Multiplayer; Debug and Mixed builds only.
   */
  net_cl_update_rate: "net_cl_update_rate",
  /**
   * Compresses outgoing network packets.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  net_compressor_enabled: "net_compressor_enabled",
  /**
   * Gathers network packet compression statistics.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  net_compressor_gather_stats: "net_compressor_gather_stats",
  /**
   * Prints brief or full network compressor statistics.
   * Multiplayer.
   */
  net_compressor_status: "net_compressor_status",
  /**
   * Logs per-object sizes of exported network updates.
   * Integer from 0 to 1.
   */
  net_dbg_dump_export_obj: "net_dbg_dump_export_obj",
  /**
   * Logs per-object sizes of imported network updates.
   * Integer from 0 to 1.
   */
  net_dbg_dump_import_obj: "net_dbg_dump_import_obj",
  /**
   * Logs per-object sizes of updates the server reads from clients.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  net_dbg_dump_update_read: "net_dbg_dump_update_read",
  /**
   * Logs per-object sizes of updates the server writes.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  net_dbg_dump_update_write: "net_dbg_dump_update_write",
  /**
   * Lists client and server objects side by side to spot mismatches.
   * Multiplayer; Debug and Mixed builds only.
   */
  net_dbg_objects: "net_dbg_objects",
  /**
   * Milliseconds a dedicated server sleeps in place of rendering each frame.
   * Integer from 0 to 64.
   */
  net_dedicated_sleep: "net_dedicated_sleep",
  /**
   * Sets a packet size dump flag that no code currently reads.
   * Toggle, `on` or `off`.
   * Multiplayer; Debug and Mixed builds only.
   */
  net_dump_size: "net_dump_size",
  /**
   * Clears the server's network statistics.
   * Multiplayer.
   */
  net_sv_clearstats: "net_sv_clearstats",
  /**
   * How batched sends treat guaranteed packets: default, unreliable or separate.
   * Integer from 0 to 2.
   * Multiplayer.
   */
  net_sv_gpmode: "net_sv_gpmode",
  /**
   * Logs server network packets.
   * Toggle, `on` or `off`.
   * Multiplayer.
   */
  net_sv_log_data: "net_sv_log_data",
  /**
   * Queued packets per client above which the server skips sending updates.
   * Integer from 0 to 10.
   * Multiplayer.
   */
  net_sv_pending_lim: "net_sv_pending_lim",
  /**
   * Server network updates sent per second.
   * Integer from 1 to 100.
   * Multiplayer.
   */
  net_sv_update_rate: "net_sv_update_rate",
  /**
   * Scales how easily breakable physics joints and fractures break.
   * Number from 0 to 1000000000.
   * Debug and Mixed builds only.
   */
  ph_break_common_factor: "ph_break_common_factor",
  /**
   * Sets physics simulation steps per second.
   */
  ph_frequency: "ph_frequency",
  /**
   * Sets the physics world gravity.
   * Debug and Mixed builds only.
   */
  ph_gravity: "ph_gravity",
  /**
   * Sets the solver iteration count per physics step.
   */
  ph_iterations: "ph_iterations",
  /**
   * Scales hit forces counted toward breaking rigid fractures.
   * Number from 0 to 1000000000.
   * Debug and Mixed builds only.
   */
  ph_rigid_break_weapon_factor: "ph_rigid_break_weapon_factor",
  /**
   * Scales physics simulation speed relative to game time.
   * Number from 0.000001 to 1000.
   * Debug and Mixed builds only.
   */
  ph_timefactor: "ph_timefactor",
  /**
   * Sets how many steps a deactivated physics object keeps cached triangles.
   * Integer from 0 to 255.
   * Debug and Mixed builds only.
   */
  ph_tri_clear_disable_count: "ph_tri_clear_disable_count",
  /**
   * Sets how much the level triangle query box is enlarged around bodies.
   * Number from 1.01 to 3.
   * Debug and Mixed builds only.
   */
  ph_tri_query_ex_aabb_rate: "ph_tri_query_ex_aabb_rate",
  /**
   * Disconnects and exits the game.
   */
  quit: "quit",
  /**
   * Flag meant to toggle R1 detail textures; nothing reads it.
   * Toggle, `on` or `off`.
   */
  r1_detail_textures: "r1_detail_textures",
  /**
   * Renders dynamic lights in the R1 renderer.
   * Toggle, `on` or `off`.
   */
  r1_dlights: "r1_dlights",
  /**
   * Clip distance for R1 dynamic lights; nothing reads it.
   * Number from 10 to 150.
   */
  r1_dlights_clip: "r1_dlights_clip",
  /**
   * Flag meant to force the R1 fixed-function pipeline; nothing reads it.
   * Toggle, `on` or `off`.
   */
  r1_ffp: "r1_ffp",
  /**
   * Uses lightmaps in the R1 fixed-function pipeline.
   * Toggle, `on` or `off`.
   */
  r1_ffp_lightmaps: "r1_ffp_lightmaps",
  /**
   * Brightness multiplier for fog color in R1.
   * Number from 0.2 to 5.
   */
  r1_fog_luminance: "r1_fog_luminance",
  /**
   * Forces static meshes to always render their simplified fast-path geometry.
   * Integer from 0 to 1.
   */
  r1_force_geomx: "r1_force_geomx",
  /**
   * Glow count per frame for R1; nothing reads it.
   * Integer from 2 to 32.
   */
  r1_glows_per_frame: "r1_glows_per_frame",
  /**
   * R1 lighting model blend factor; nothing reads it.
   * Number from 0 to 0.333.
   */
  r1_lmodel_lerp: "r1_lmodel_lerp",
  /**
   * Horizontal pixel offset of the post-process screen quad.
   * Number from -1 to 1.
   */
  r1_pps_u: "r1_pps_u",
  /**
   * Vertical pixel offset of the post-process screen quad.
   * Number from -1 to 1.
   */
  r1_pps_v: "r1_pps_v",
  /**
   * Skins skeletal meshes on the CPU in R1.
   * Integer from 0 to 2.
   */
  r1_software_skinning: "r1_software_skinning",
  /**
   * R1 LOD screen-size threshold; nothing reads it.
   * Number from 16 to 96.
   */
  r1_ssa_lod_a: "r1_ssa_lod_a",
  /**
   * R1 LOD screen-size threshold; nothing reads it.
   * Number from 16 to 64.
   */
  r1_ssa_lod_b: "r1_ssa_lod_b",
  /**
   * Mipmap level-of-detail bias applied to texture sampling.
   */
  r1_tf_mipbias: "r1_tf_mipbias",
  /**
   * Applies edge-detection antialiasing in the final combine pass.
   * Toggle, `on` or `off`.
   */
  r2_aa: "r2_aa",
  /**
   * Normal and depth thresholds that detect edges for antialiasing.
   * Three numbers, `x,y,z`.
   */
  r2_aa_break: "r2_aa_break",
  /**
   * Blur width of edge-detection antialiasing.
   * Number from 0.3 to 0.7.
   */
  r2_aa_kernel: "r2_aa_kernel",
  /**
   * Normal and depth weights used when detecting antialiasing edges.
   * Three numbers, `x,y,z`.
   */
  r2_aa_weight: "r2_aa_weight",
  /**
   * Renders static level lights as dynamic lights.
   * Toggle, `on` or `off`.
   */
  r2_allow_r1_lights: "r2_allow_r1_lights",
  /**
   * Uses bump maps on detail textures.
   * Toggle, `on` or `off`.
   */
  r2_detail_bump: "r2_detail_bump",
  /**
   * Sky visibility rays traced per frame for dynamic object hemi lighting.
   * Integer from 4 to 25.
   * Not in gold builds.
   */
  r2_dhemi_count: "r2_dhemi_count",
  /**
   * Share of nearby light hemi lighting carried to the opposite side of objects.
   * Number from 0 to 1.
   * Not in gold builds.
   */
  r2_dhemi_light_flow: "r2_dhemi_light_flow",
  /**
   * Scale of nearby lights' contribution to dynamic object hemi lighting.
   * Number from 0 to 100.
   * Not in gold builds.
   */
  r2_dhemi_light_scale: "r2_dhemi_light_scale",
  /**
   * Scale of sky contribution to dynamic object hemi lighting.
   * Number from 0 to 100.
   * Not in gold builds.
   */
  r2_dhemi_sky_scale: "r2_dhemi_sky_scale",
  /**
   * Speed at which object hemi and sun lighting blend toward new values.
   * Number from 0 to 10.
   * Not in gold builds.
   */
  r2_dhemi_smooth: "r2_dhemi_smooth",
  /**
   * Base depth of field near, focus and far distances.
   */
  r2_dof: "r2_dof",
  /**
   * Enables depth of field blur.
   * Toggle, `on` or `off`.
   */
  r2_dof_enable: "r2_dof_enable",
  /**
   * Distance at which far depth of field blur reaches full strength.
   */
  r2_dof_far: "r2_dof_far",
  /**
   * Distance of the depth of field focal plane.
   */
  r2_dof_focus: "r2_dof_focus",
  /**
   * Size of the depth of field blur kernel.
   * Number from 0 to 10.
   */
  r2_dof_kernel: "r2_dof_kernel",
  /**
   * Distance at which near depth of field blur reaches full strength.
   */
  r2_dof_near: "r2_dof_near",
  /**
   * Depth assumed for the sky in depth of field calculations.
   * Number from -10000 to 10000.
   */
  r2_dof_sky: "r2_dof_sky",
  /**
   * Skips occlusion tests for shadow-casting lights, treating them as visible.
   * Toggle, `on` or `off`.
   */
  r2_exp_donttest_shad: "r2_exp_donttest_shad",
  /**
   * Adds approximate global illumination from bounced light photons.
   * Toggle, `on` or `off`.
   */
  r2_gi: "r2_gi",
  /**
   * Minimum energy a bounced global illumination light needs to render.
   * Number from `EPS` to 0.1.
   */
  r2_gi_clip: "r2_gi_clip",
  /**
   * Global illumination bounce depth; nothing reads it.
   * Integer from 1 to 5.
   */
  r2_gi_depth: "r2_gi_depth",
  /**
   * Number of bounced global illumination lights kept per light source.
   * Integer from 8 to 256.
   */
  r2_gi_photons: "r2_gi_photons",
  /**
   * Total energy of bounced global illumination relative to its source light.
   * Number from `EPS_L` to 0.99.
   */
  r2_gi_refl: "r2_gi_refl",
  /**
   * Multiplier for the specular highlight intensity of lights.
   * Number from 0 to 10.
   */
  r2_gloss_factor: "r2_gloss_factor",
  /**
   * Uses the fast bilinear bloom filter instead of the Gaussian blur.
   * Toggle, `on` or `off`.
   */
  r2_ls_bloom_fast: "r2_ls_bloom_fast",
  /**
   * Sample offset scale of the fast bloom filter.
   * Number from 0.01 to 1.
   */
  r2_ls_bloom_kernel_b: "r2_ls_bloom_kernel_b",
  /**
   * Radius of the Gaussian bloom blur.
   * Number from 1 to 7.
   */
  r2_ls_bloom_kernel_g: "r2_ls_bloom_kernel_g",
  /**
   * Intensity multiplier of the Gaussian bloom blur weights.
   * Number from 0.5 to 2.
   */
  r2_ls_bloom_kernel_scale: "r2_ls_bloom_kernel_scale",
  /**
   * Rate of the smoothed bloom factor, which the vanilla bloom shaders do not read.
   * Number from 0 to 100.
   */
  r2_ls_bloom_speed: "r2_ls_bloom_speed",
  /**
   * Brightness threshold above which pixels contribute to bloom.
   * Number from 0 to 1.
   */
  r2_ls_bloom_threshold: "r2_ls_bloom_threshold",
  /**
   * Depth bias applied to spot light shadow map lookups.
   * Number from -0.5 to 0.5.
   */
  r2_ls_depth_bias: "r2_ls_depth_bias",
  /**
   * Depth scale applied to spot light shadow map lookups.
   * Number from 0.5 to 1.5.
   */
  r2_ls_depth_scale: "r2_ls_depth_scale",
  /**
   * Shadow filter kernel size; nothing reads it.
   * Number from 0.1 to 3.
   */
  r2_ls_dsm_kernel: "r2_ls_dsm_kernel",
  /**
   * Shadow filter kernel size; nothing reads it.
   * Number from 0.1 to 3.
   */
  r2_ls_psm_kernel: "r2_ls_psm_kernel",
  /**
   * Scale of the adaptive shadow map size given to each spot light.
   * Number from 0.5 to 1.
   */
  r2_ls_squality: "r2_ls_squality",
  /**
   * Shadow filter kernel size; nothing reads it.
   * Number from 0.1 to 3.
   */
  r2_ls_ssm_kernel: "r2_ls_ssm_kernel",
  /**
   * Strength of camera motion blur.
   * Number from 0 to 1.
   */
  r2_mblur: "r2_mblur",
  /**
   * Flag for multithreaded calculation; nothing reads it.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  r2_mt: "r2_mt",
  /**
   * Runs render phase visibility calculation on worker threads.
   * Integer from 0 to 1.
   */
  r2_mt_calculate: "r2_mt_calculate",
  /**
   * Records sun shadow and rain draw calls on worker threads.
   * Integer from 0 to 1.
   * The R4 renderer only.
   */
  r2_mt_render: "r2_mt_render",
  /**
   * Height scale of parallax mapping on bump-mapped surfaces.
   * Number from 0 to 0.5.
   */
  r2_parallax_h: "r2_parallax_h",
  /**
   * Uses the old near/far sun shadow path instead of cascaded shadows.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  r2_shadow_cascede_old: "r2_shadow_cascede_old",
  /**
   * Depth-tests the far sun shadow cascade instead of using stencil only.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  r2_shadow_cascede_zcul: "r2_shadow_cascede_zcul",
  /**
   * Scales the screen size used to fade out distant shadowed lights.
   * Number from 0.2 to 1.
   */
  r2_slight_fade: "r2_slight_fade",
  /**
   * Resolution of shadow maps, in pixels.
   * One of the `qsmapsize_token` values.
   */
  r2_smap_size: "r2_smap_size",
  /**
   * Fades particles softly where they intersect geometry.
   * Toggle, `on` or `off`.
   */
  r2_soft_particles: "r2_soft_particles",
  /**
   * Fades water edges softly where they meet geometry.
   * Toggle, `on` or `off`.
   */
  r2_soft_water: "r2_soft_water",
  /**
   * Screen size below which LOD objects render as imposters.
   * Number from 16 to 96.
   */
  r2_ssa_lod_a: "r2_ssa_lod_a",
  /**
   * Screen size above which LOD objects render full-detail geometry.
   * Number from 32 to 64.
   */
  r2_ssa_lod_b: "r2_ssa_lod_b",
  /**
   * Quality level of screen space ambient occlusion.
   * One of the `qssao_token` values.
   */
  r2_ssao: "r2_ssao",
  /**
   * Blurs the ambient occlusion result.
   * Toggle, `on` or `off`.
   */
  r2_ssao_blur: "r2_ssao_blur",
  /**
   * Builds the ambient occlusion depth target at half resolution.
   * Toggle, `on` or `off`.
   */
  r2_ssao_half_data: "r2_ssao_half_data",
  /**
   * Uses horizon-based ambient occlusion (HBAO); Direct3D 11 only.
   * Toggle, `on` or `off`.
   */
  r2_ssao_hbao: "r2_ssao_hbao",
  /**
   * Uses high definition ambient occlusion (HDAO); Direct3D 11 only.
   * Toggle, `on` or `off`.
   */
  r2_ssao_hdao: "r2_ssao_hdao",
  /**
   * Ambient occlusion technique: standard SSAO, HDAO or HBAO.
   */
  r2_ssao_mode: "r2_ssao_mode",
  /**
   * Samples ambient occlusion from a dedicated depth target.
   * Toggle, `on` or `off`.
   */
  r2_ssao_opt_data: "r2_ssao_opt_data",
  /**
   * Uses steep parallax mapping on surfaces that support it.
   * Toggle, `on` or `off`.
   */
  r2_steep_parallax: "r2_steep_parallax",
  /**
   * Renders sunlight and sun shadows.
   * Toggle, `on` or `off`.
   */
  r2_sun: "r2_sun",
  /**
   * Depth bias applied to far sun shadow cascade lookups.
   * Number from -0.5 to 0.5.
   */
  r2_sun_depth_far_bias: "r2_sun_depth_far_bias",
  /**
   * Depth scale applied to far sun shadow cascade lookups.
   * Number from 0.5 to 1.5.
   */
  r2_sun_depth_far_scale: "r2_sun_depth_far_scale",
  /**
   * Depth bias applied to near sun shadow cascade lookups.
   * Number from -0.5 to 0.5.
   */
  r2_sun_depth_near_bias: "r2_sun_depth_near_bias",
  /**
   * Depth scale applied to near sun shadow cascade lookups.
   * Number from 0.5 to 1.5.
   */
  r2_sun_depth_near_scale: "r2_sun_depth_near_scale",
  /**
   * Casts sun shadows from grass and other detail objects.
   * Toggle, `on` or `off`.
   */
  r2_sun_details: "r2_sun_details",
  /**
   * Distance at which the far sun shadow cascade ends, in meters.
   * Number from 51 to 180.
   * Renderers other than R1 only.
   */
  r2_sun_far: "r2_sun_far",
  /**
   * Fits the sun shadow frustum around casters and receivers (old shadow path).
   * Toggle, `on` or `off`.
   */
  r2_sun_focus: "r2_sun_focus",
  /**
   * Multiplier for sunlight color.
   * Number from -1 to 3.
   */
  r2_sun_lumscale: "r2_sun_lumscale",
  /**
   * Multiplier for ambient light color.
   * Number from 0 to 3.
   */
  r2_sun_lumscale_amb: "r2_sun_lumscale_amb",
  /**
   * Multiplier for sky hemisphere lighting.
   * Number from 0 to 3.
   */
  r2_sun_lumscale_hemi: "r2_sun_lumscale_hemi",
  /**
   * Distance covered by the near sun shadow cascade, in meters.
   * Number from 1 to 150.
   */
  r2_sun_near: "r2_sun_near",
  /**
   * Near sun shadow border factor; only commented-out code reads it.
   * Number from 0.5 to 1.
   */
  r2_sun_near_border: "r2_sun_near_border",
  /**
   * Quality of sun shadow filtering.
   * One of the `qsun_quality_token` values.
   */
  r2_sun_quality: "r2_sun_quality",
  /**
   * Quality of volumetric sun shafts.
   * One of the `qsun_shafts_token` values.
   */
  r2_sun_shafts: "r2_sun_shafts",
  /**
   * Uses trapezoidal shadow maps for the sun (old shadow path).
   * Toggle, `on` or `off`.
   */
  r2_sun_tsm: "r2_sun_tsm",
  /**
   * Offset along the sun direction applied to far sun shadow lookups.
   * Number from -0.5 to 0.5.
   */
  r2_sun_tsm_bias: "r2_sun_tsm_bias",
  /**
   * Projection focus of trapezoidal sun shadow maps (old shadow path).
   * Number from 0.001 to 0.8.
   */
  r2_sun_tsm_proj: "r2_sun_tsm_proj",
  /**
   * Mipmap level-of-detail bias applied to texture sampling.
   */
  r2_tf_mipbias: "r2_tf_mipbias",
  /**
   * Enables tone mapping with automatic eye adaptation.
   * Toggle, `on` or `off`.
   */
  r2_tonemap: "r2_tonemap",
  /**
   * Speed at which eye adaptation follows scene brightness.
   * Number from 0.01 to 10.
   */
  r2_tonemap_adaptation: "r2_tonemap_adaptation",
  /**
   * Strength of tone mapping.
   * Number from 0 to 1.
   */
  r2_tonemap_amount: "r2_tonemap_amount",
  /**
   * Lowest luminance tone mapping adapts to.
   * Number from 0.0001 to 1.
   */
  r2_tonemap_lowlum: "r2_tonemap_lowlum",
  /**
   * Target middle gray luminance for tone mapping.
   * Number from 0 to 2.
   */
  r2_tonemap_middlegray: "r2_tonemap_middlegray",
  /**
   * Clips light rendering with the NVIDIA depth bounds test (Direct3D 9 only).
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  r2_use_nvdbt: "r2_use_nvdbt",
  /**
   * Renders volumetric light shafts for shadowed spot lights.
   * Toggle, `on` or `off`.
   */
  r2_volumetric_lights: "r2_volumetric_lights",
  /**
   * Milliseconds to sleep while waiting on GPU queries.
   * Integer from 0 to 1.
   */
  r2_wait_sleep: "r2_wait_sleep",
  /**
   * Maximum wait for the GPU frame sync point, in milliseconds.
   * Integer from 100 to 1000.
   */
  r2_wait_timeout: "r2_wait_timeout",
  /**
   * Pre-fills the depth buffer with nearby geometry before the main pass.
   * Toggle, `on` or `off`.
   */
  r2_zfill: "r2_zfill",
  /**
   * Fraction of the far plane distance covered by the depth pre-pass.
   * Number from 0.001 to 0.5.
   */
  r2_zfill_depth: "r2_zfill_depth",
  /**
   * Overrides all surface lighting materials with one value; debug builds only.
   */
  r2em: "r2em",
  /**
   * Renders rain wetness on surfaces exposed to the sky.
   * Toggle, `on` or `off`.
   */
  r3_dynamic_wet_surfaces: "r3_dynamic_wet_surfaces",
  /**
   * Distance at which rain wetness fully fades out.
   * Number from 20 to 100.
   */
  r3_dynamic_wet_surfaces_far: "r3_dynamic_wet_surfaces_far",
  /**
   * Distance at which rain wetness starts fading out.
   * Number from 5 to 70.
   */
  r3_dynamic_wet_surfaces_near: "r3_dynamic_wet_surfaces_near",
  /**
   * Resolution of the rain occlusion shadow map.
   * Integer from 64 to 2048.
   */
  r3_dynamic_wet_surfaces_sm_res: "r3_dynamic_wet_surfaces_sm_res",
  /**
   * Reloads volumetric fog profiles from config.
   * The R3 and R4 renderers only, not in gold builds.
   */
  r3_fog_reload: "r3_fog_reload",
  /**
   * Uses a compact G-buffer without a separate normal target.
   * Toggle, `on` or `off`.
   */
  r3_gbuffer_opt: "r3_gbuffer_opt",
  /**
   * Mode of the min/max shadow map optimization for near sun shadows.
   * One of the `qminmax_sm_token` values.
   */
  r3_minmax_sm: "r3_minmax_sm",
  /**
   * Multisample antialiasing sample count; Direct3D 11 only.
   * One of the `qmsaa_token` values.
   */
  r3_msaa: "r3_msaa",
  /**
   * Antialiasing mode for alpha-tested surfaces under MSAA.
   * One of the `qmsaa__atest_token` values.
   */
  r3_msaa_alphatest: "r3_msaa_alphatest",
  /**
   * Uses Direct3D 10.1 shader features and hybrid MSAA when supported.
   * Toggle, `on` or `off`.
   */
  r3_use_dx10_1: "r3_use_dx10_1",
  /**
   * Renders volumetric smoke and fog; Direct3D 11 only.
   * Toggle, `on` or `off`.
   */
  r3_volumetric_smoke: "r3_volumetric_smoke",
  /**
   * Quality of screen space water reflections; OpenGL only.
   * One of the `qwater_reflection_quality_token` values.
   */
  r3_water_refl: "r3_water_refl",
  /**
   * Traces water reflections against a half-resolution depth buffer.
   * Toggle, `on` or `off`.
   */
  r3_water_refl_half_depth: "r3_water_refl_half_depth",
  /**
   * Jitters water reflection ray samples to hide banding.
   * Toggle, `on` or `off`.
   */
  r3_water_refl_jitter: "r3_water_refl_jitter",
  /**
   * Enables hardware tessellation on Direct3D 11 hardware.
   * Toggle, `on` or `off`.
   */
  r4_enable_tessellation: "r4_enable_tessellation",
  /**
   * Renders deferred level and model geometry as wireframe.
   * Toggle, `on` or `off`.
   */
  r4_wireframe: "r4_wireframe",
  /**
   * Renders the player's own body into shadow maps.
   * Toggle, `on` or `off`.
   */
  r__actor_shadow: "r__actor_shadow",
  /**
   * Clears the model pool and visual cache when a level unloads.
   * Integer from 0 to 1.
   */
  r__clear_models_on_unload: "r__clear_models_on_unload",
  /**
   * Spacing between grass and detail objects; lower values are denser.
   * Number from 0.1 to 0.99.
   */
  r__detail_density: "r__detail_density",
  /**
   * Scale applied to the size of grass and detail objects.
   * Number from 1 to 2.
   */
  r__detail_height: "r__detail_height",
  /**
   * Ambient light term for grass, read only by the R1 shaders.
   * Number from 0.5 to 0.95.
   * Debug and Mixed builds only.
   */
  r__detail_l_ambient: "r__detail_l_ambient",
  /**
   * Diffuse light scale for grass, read only by the R1 shaders.
   * Number from 0.1 to 0.5.
   * Debug and Mixed builds only.
   */
  r__detail_l_aniso: "r__detail_l_aniso",
  /**
   * Distance around the camera within which grass is drawn.
   */
  r__detail_radius: "r__detail_radius",
  /**
   * Distance over which detail textures fade out.
   * Number from 5 to 175.
   */
  r__dtex_range: "r__dtex_range",
  /**
   * Geometry level-of-detail scale; higher keeps detailed models farther away.
   * Number from 0.1 to 2.
   */
  r__geometry_lod: "r__geometry_lod",
  /**
   * Frames a light waits before testing which shadow casters it can skip.
   * Integer from 4 to 30.
   * Debug and Mixed builds only.
   */
  r__lsleep_frames: "r__lsleep_frames",
  /**
   * Screen size at which models and shadowed lights reach lowest detail.
   * Number from 16 to 96.
   * Debug and Mixed builds only.
   */
  r__ssa_glod_end: "r__ssa_glod_end",
  /**
   * Screen size above which models and shadowed lights render at full detail.
   * Number from 128 to 512.
   * Debug and Mixed builds only.
   */
  r__ssa_glod_start: "r__ssa_glod_start",
  /**
   * Supersampling factor; nothing reads it.
   * Integer from 1 to 8.
   */
  r__supersample: "r__supersample",
  /**
   * Maximum anisotropic texture filtering level.
   */
  r__tf_aniso: "r__tf_aniso",
  /**
   * Projection depth offset that pulls wallmarks toward the camera.
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  r__wallmark_shift_pp: "r__wallmark_shift_pp",
  /**
   * Distance the wallmark view origin moves along the camera direction.
   * Number from 0 to 1.
   * Debug and Mixed builds only.
   */
  r__wallmark_shift_v: "r__wallmark_shift_v",
  /**
   * Lifetime of wallmarks such as bullet holes, in seconds.
   * Number from 1 to `10.f * 60`.
   */
  r__wallmark_ttl: "r__wallmark_ttl",
  /**
   * Leaves bullet hit marks on character and creature models.
   * Integer from 0 to 1.
   */
  r__wallmarks_on_skeleton: "r__wallmarks_on_skeleton",
  /**
   * Sends a remote admin login, logout or command to the server.
   * Multiplayer.
   */
  ra: "ra",
  /**
   * Sets the player rank used for multiplayer buy-menu restrictions.
   * Integer from 0 to 4.
   * Debug and Mixed builds only.
   */
  rank_for_buymenu: "rank_for_buymenu",
  /**
   * Prints video memory used by buffers, textures and render targets.
   */
  render_memory_stats: "render_memory_stats",
  /**
   * Selects the renderer to use.
   */
  renderer: "renderer",
  /**
   * Keeps the game running when the window loses focus.
   * Toggle, `on` or `off`.
   */
  rs_always_active: "rs_always_active",
  /**
   * Screen brightness.
   */
  rs_c_brightness: "rs_c_brightness",
  /**
   * Screen contrast.
   */
  rs_c_contrast: "rs_c_contrast",
  /**
   * Screen gamma.
   */
  rs_c_gamma: "rs_c_gamma",
  /**
   * Shows the camera position on screen.
   * Toggle, `on` or `off`.
   */
  rs_cam_pos: "rs_cam_pos",
  /**
   * Clears the back buffer to black every frame.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  rs_clear_bb: "rs_clear_bb",
  /**
   * Draws detail objects such as grass.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_detail: "rs_detail",
  /**
   * Opens the in-game editor.
   */
  rs_editor: "rs_editor",
  /**
   * Shows a frame-rate counter in the top-right corner.
   * Toggle, `on` or `off`.
   */
  rs_fps: "rs_fps",
  /**
   * Shows a frame-rate graph on screen.
   * Toggle, `on` or `off`.
   */
  rs_fps_graph: "rs_fps_graph",
  /**
   * Maximum frame rate while a level is running.
   * Integer from 30 to 501.
   */
  rs_fps_limit: "rs_fps_limit",
  /**
   * Maximum frame rate in the menu or while paused.
   * Integer from 30 to 501.
   */
  rs_fps_limit_in_menu: "rs_fps_limit_in_menu",
  /**
   * Switches to fullscreen; off switches to a borderless window.
   */
  rs_fullscreen: "rs_fullscreen",
  /**
   * Draws the hierarchical occlusion depth buffer; debug builds only.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_hom_depth_draw: "rs_hom_depth_draw",
  /**
   * Draws occluder geometry and portals for debugging.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  rs_occ_draw: "rs_occ_draw",
  /**
   * Forces a 60 Hz refresh rate; off lets the device choose.
   */
  rs_refresh_60hz: "rs_refresh_60hz",
  /**
   * Draws dynamic objects.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_render_dynamics: "rs_render_dynamics",
  /**
   * Draws particle effects.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_render_particles: "rs_render_particles",
  /**
   * Draws static level geometry.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_render_statics: "rs_render_statics",
  /**
   * Frames between recalculations of a skeleton's bounding box.
   * Integer from 2 to 128.
   */
  rs_skeleton_update: "rs_skeleton_update",
  /**
   * Draws engine performance statistics over the screen.
   * Toggle, `on` or `off`.
   */
  rs_stats: "rs_stats",
  /**
   * Synchronizes frame presentation with the display refresh.
   * Toggle, `on` or `off`.
   */
  rs_v_sync: "rs_v_sync",
  /**
   * Multiplier on the weather-defined view distance.
   * Number from 0.4 to 1.5.
   */
  rs_vis_distance: "rs_vis_distance",
  /**
   * Renders the scene as wireframe.
   * Toggle, `on` or `off`.
   * Not in gold builds.
   */
  rs_wireframe: "rs_wireframe",
  /**
   * Runs the named script file.
   * Not in gold builds.
   */
  run_script: "run_script",
  /**
   * Runs the given Lua code.
   * Not in gold builds.
   */
  run_string: "run_string",
  /**
   * Saves the game under the given name, or quicksaves without one.
   */
  save: "save",
  /**
   * Saves a screenshot, optionally under the given file name.
   */
  screenshot: "screenshot",
  /**
   * Requests a screenshot from every player, for remote admins.
   * Multiplayer.
   */
  screenshot_all: "screenshot_all",
  /**
   * Breaks into the active script debugger.
   * Debug and Mixed builds only, builds with the script debugger only.
   */
  script_debug_break: "script_debug_break",
  /**
   * Restarts the script debugger, or starts it if absent.
   * Debug and Mixed builds only, builds with the script debugger only.
   */
  script_debug_restart: "script_debug_restart",
  /**
   * Stops the script debugger.
   * Debug and Mixed builds only, builds with the script debugger only.
   */
  script_debug_stop: "script_debug_stop",
  /**
   * Logs the collected `smart_cast` statistics.
   * Debug and Mixed builds only.
   */
  show_smart_cast_stats: "show_smart_cast_stats",
  /**
   * Stores the item section bound to the first quick-use slot.
   * Text, at most 32 characters.
   */
  slot_0: "slot_0",
  /**
   * Stores the item section bound to the second quick-use slot.
   * Text, at most 32 characters.
   */
  slot_1: "slot_1",
  /**
   * Stores the item section bound to the third quick-use slot.
   * Text, at most 32 characters.
   */
  slot_2: "slot_2",
  /**
   * Stores the item section bound to the fourth quick-use slot.
   * Text, at most 32 characters.
   */
  slot_3: "slot_3",
  /**
   * Hardware sound mixing flag that nothing reads.
   * Toggle, `on` or `off`.
   */
  snd_acceleration: "snd_acceleration",
  /**
   * Sound cache size in megabytes; nothing reads it.
   * Integer from 4 to 64.
   */
  snd_cache_size: "snd_cache_size",
  /**
   * Selects the audio output device.
   */
  snd_device: "snd_device",
  /**
   * Enables OpenAL EFX environmental sound effects.
   * Toggle, `on` or `off`.
   */
  snd_efx: "snd_efx",
  /**
   * Restarts the sound system.
   */
  snd_restart: "snd_restart",
  /**
   * Draws a marker at each playing 3D sound.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats: "snd_stats",
  /**
   * Draws the AI hearing range of sounds made by game objects.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_ai_dist: "snd_stats_ai_dist",
  /**
   * Enables text labels on sound debug markers.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_info_name: "snd_stats_info_name",
  /**
   * Labels sound debug markers with the source object's section.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_info_object: "snd_stats_info_object",
  /**
   * Draws each 3D sound's maximum audible distance sphere.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_max_dist: "snd_stats_max_dist",
  /**
   * Draws each 3D sound's minimum distance sphere.
   * Toggle, `on` or `off`.
   * Debug and Mixed builds only.
   */
  snd_stats_min_dist: "snd_stats_min_dist",
  /**
   * Number of sound sources created for simultaneous playback.
   * Integer from 4 to 256.
   */
  snd_targets: "snd_targets",
  /**
   * Uses 32-bit float sound data when the device supports it.
   * Toggle, `on` or `off`.
   */
  snd_use_float32: "snd_use_float32",
  /**
   * Volume of sound effects.
   * Number from 0 to 1.
   */
  snd_volume_eff: "snd_volume_eff",
  /**
   * Volume of music.
   * Number from 0 to 1.
   */
  snd_volume_music: "snd_volume_music",
  /**
   * Stores a stalker death animation name; no engine code reads it.
   * Text, at most 32 characters.
   * Debug and Mixed builds only.
   */
  stalker_death_anim: "stalker_death_anim",
  /**
   * Starts or connects to a game from server and client options.
   */
  start: "start",
  /**
   * Sets the game start date and time as `y.m.d h:m:s.ms`.
   * Not in gold builds.
   */
  start_time_single: "start_time_single",
  /**
   * Logs texture, heap, shared string and shared memory usage.
   */
  stat_memory: "stat_memory",
  /**
   * Dumps the model pool to the log.
   * Debug and Mixed builds only.
   */
  stat_models: "stat_models",
  /**
   * Prints loaded skeletal motions and their memory use to the log.
   * Not in gold builds.
   */
  stat_motions: "stat_motions",
  /**
   * Prints loaded textures and their memory use to the log.
   * Not in gold builds.
   */
  stat_textures: "stat_textures",
  /**
   * Adds a map to the map rotation list.
   * Multiplayer.
   */
  sv_addmap: "sv_addmap",
  /**
   * Ban duration selected in the admin menu's ban list.
   * One of the `g_ban_times` values.
   * Multiplayer.
   */
  sv_adm_menu_ban_time: "sv_adm_menu_ban_time",
  /**
   * Admin menu ping limit slider value, in tens of milliseconds.
   * Integer from 1 to 200.
   * Multiplayer.
   */
  sv_adm_menu_ping_limit: "sv_adm_menu_ping_limit",
  /**
   * Enables anomaly sets that rotate during the match.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_anomalies_enabled: "sv_anomalies_enabled",
  /**
   * Minutes each anomaly set stays active before the next one.
   * Integer from 0 to 180.
   * Multiplayer.
   */
  sv_anomalies_length: "sv_anomalies_length",
  /**
   * Seconds before a new artefact spawns.
   * Integer from 0 to 600.
   * Multiplayer.
   */
  sv_artefact_respawn_delta: "sv_artefact_respawn_delta",
  /**
   * Seconds a dropped artefact lies before returning to its base.
   * Integer from 0 to `5 * 60`.
   * Multiplayer.
   */
  sv_artefact_returning_time: "sv_artefact_returning_time",
  /**
   * Spawns the artefact even when a team has no active players.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_artefact_spawn_force: "sv_artefact_spawn_force",
  /**
   * Minutes an untaken artefact stays on the map before removal.
   * Integer from 0 to 180.
   * Multiplayer.
   */
  sv_artefact_stay_time: "sv_artefact_stay_time",
  /**
   * Artefacts a team must deliver to win the round.
   * Integer from 1 to 100.
   * Multiplayer.
   */
  sv_artefacts_count: "sv_artefacts_count",
  /**
   * Automatically balances the number of players per team.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_auto_team_balance: "sv_auto_team_balance",
  /**
   * Swaps the teams automatically between rounds.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_auto_team_swap: "sv_auto_team_swap",
  /**
   * Bans a player by session ID for a number of seconds and kicks them.
   * Multiplayer.
   */
  sv_banplayer: "sv_banplayer",
  /**
   * Bans a player's CD key hex digest for a number of seconds.
   * Multiplayer.
   */
  sv_banplayer_by_digest: "sv_banplayer_by_digest",
  /**
   * Bans an IP address for a set time and disconnects it.
   * Multiplayer.
   */
  sv_banplayer_ip: "sv_banplayer_ip",
  /**
   * Prevents the artefact carrier from sprinting.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_bearercantsprint: "sv_bearercantsprint",
  /**
   * Restarts the current level with another game type.
   * Multiplayer.
   */
  sv_changegametype: "sv_changegametype",
  /**
   * Switches to another level and version with the current game type.
   * Multiplayer.
   */
  sv_changelevel: "sv_changelevel",
  /**
   * Switches to another level, version and game type.
   * Multiplayer.
   */
  sv_changelevelgametype: "sv_changelevelgametype",
  /**
   * Minutes a disconnected player's state is kept for reconnecting.
   * Integer from 0 to 60.
   * Multiplayer.
   */
  sv_client_reconnect_time: "sv_client_reconnect_time",
  /**
   * Text console update rate; nothing reads it.
   * Integer from 1 to 100.
   * Windows only.
   */
  sv_console_update_rate: "sv_console_update_rate",
  /**
   * Caps player rank at this multiple of the leading team's artefact score.
   * Integer from 0 to 10.
   * Multiplayer.
   */
  sv_cta_runkup_to_arts_div: "sv_cta_runkup_to_arts_div",
  /**
   * Frame rate cap of a dedicated server, in updates per second.
   * Integer from 1 to 1000.
   */
  sv_dedicated_server_update_rate: "sv_dedicated_server_update_rate",
  /**
   * Shows indicators on players protected by respawn invulnerability.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_dmgblockindicator: "sv_dmgblockindicator",
  /**
   * Seconds of invulnerability after a player respawns.
   * Integer from 0 to 600.
   * Multiplayer.
   */
  sv_dmgblocktime: "sv_dmgblocktime",
  /**
   * Writes current server and player statistics to the logs folder.
   * Multiplayer.
   */
  sv_dump_online_statistics: "sv_dump_online_statistics",
  /**
   * Minutes between automatic statistics dumps; zero disables them.
   * Integer from 0 to 60.
   * Multiplayer.
   */
  sv_dump_online_statistics_period: "sv_dump_online_statistics_period",
  /**
   * Seconds after death before a player is respawned automatically.
   * Integer from 0 to 3600.
   * Multiplayer.
   */
  sv_forcerespawn: "sv_forcerespawn",
  /**
   * Frags needed to win the round; zero disables the limit.
   * Integer from 0 to 1000.
   * Multiplayer.
   */
  sv_fraglimit: "sv_fraglimit",
  /**
   * Shows indicators above teammates.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_friendly_indicators: "sv_friendly_indicators",
  /**
   * Shows teammates' names.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_friendly_names: "sv_friendly_names",
  /**
   * Damage multiplier for hits on teammates.
   * Number from 0 to 2.
   * Multiplayer.
   */
  sv_friendlyfire: "sv_friendlyfire",
  /**
   * Seconds the server waits before ending a won round.
   * Integer from 0 to 60.
   * Multiplayer.
   */
  sv_hail_to_winner_time: "sv_hail_to_winner_time",
  /**
   * Lets players buy items without spending money.
   * Integer from 0 to 1.
   * Multiplayer; Debug and Mixed builds only.
   */
  sv_ignore_money_on_buy: "sv_ignore_money_on_buy",
  /**
   * Lets clients connect despite a game data checksum mismatch.
   * Multiplayer; not in gold builds.
   */
  sv_ignore_version_mismatch: "sv_ignore_version_mismatch",
  /**
   * Seconds of invulnerability after a player respawns.
   * Integer from 0 to 60.
   * Multiplayer.
   */
  sv_invincible_time: "sv_invincible_time",
  /**
   * Kicks a player by name from the server.
   * Multiplayer.
   */
  sv_kick: "sv_kick",
  /**
   * Kicks a player by session ID from the server.
   * Multiplayer.
   */
  sv_kick_id: "sv_kick_id",
  /**
   * Lists the maps in the map rotation list.
   * Multiplayer.
   */
  sv_listmaps: "sv_listmaps",
  /**
   * Lists connected players with session ID, IP and ping.
   * Multiplayer.
   */
  sv_listplayers: "sv_listplayers",
  /**
   * Lists banned players and banned IP addresses.
   * Multiplayer.
   */
  sv_listplayers_banned: "sv_listplayers_banned",
  /**
   * Ping in milliseconds above which players are warned and then kicked.
   * Integer from 1 to 2000.
   * Multiplayer.
   */
  sv_max_ping_limit: "sv_max_ping_limit",
  /**
   * Suspicious connection actions allowed before a player is banned.
   * Integer from 1 to 30.
   * Multiplayer.
   */
  sv_max_suspicious_actions: "sv_max_suspicious_actions",
  /**
   * Activates the anomaly set with the given number.
   * Multiplayer.
   */
  sv_nextanomalyset: "sv_nextanomalyset",
  /**
   * Switches to the next map in the rotation list.
   * Multiplayer.
   */
  sv_nextmap: "sv_nextmap",
  /**
   * Skips the client data authentication check on connect.
   * Multiplayer; not in gold builds.
   */
  sv_no_auth_check: "sv_no_auth_check",
  /**
   * Gives bonus money for taking the PDAs of killed players.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_pda_hunt: "sv_pda_hunt",
  /**
   * Switches to the previous map in the rotation list.
   * Multiplayer.
   */
  sv_prevmap: "sv_prevmap",
  /**
   * Seconds between respawn waves; -1 waits for an artefact delivery.
   * Integer from -1 to 3600.
   * Multiplayer.
   */
  sv_reinforcement_time: "sv_reinforcement_time",
  /**
   * Corpse removal: never, immediately, or after a delay.
   * Integer from -1 to 1.
   * Multiplayer.
   */
  sv_remove_corpse: "sv_remove_corpse",
  /**
   * Dropped weapon removal: never, immediately, or after a delay.
   * Integer from -1 to 1.
   * Multiplayer.
   */
  sv_remove_weapon: "sv_remove_weapon",
  /**
   * Moves all living players back to their bases.
   * Multiplayer.
   */
  sv_return_to_base: "sv_return_to_base",
  /**
   * Moves living players back to bases after an artefact delivery.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_returnplayers: "sv_returnplayers",
  /**
   * Milliseconds a respawn point stays blocked after being used.
   * Integer from 0 to 60000.
   * Multiplayer.
   */
  sv_rpoint_freeze_time: "sv_rpoint_freeze_time",
  /**
   * Saves player config dumps that pass through the server to disk.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_saveconfigs: "sv_saveconfigs",
  /**
   * Saves player screenshots that pass through the server to disk.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_savescreenshots: "sv_savescreenshots",
  /**
   * Sets the environment time of day from hours, minutes and seconds.
   * Multiplayer.
   */
  sv_setenvtime: "sv_setenvtime",
  /**
   * Switches to the named weather cycle.
   * Multiplayer.
   */
  sv_setweather: "sv_setweather",
  /**
   * Makes players invulnerable while inside their team base.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_shieldedbases: "sv_shieldedbases",
  /**
   * Seconds player scores are shown after a round ends.
   * Integer from 1 to 20.
   * Multiplayer.
   */
  sv_show_player_scores_time: "sv_show_player_scores_time",
  /**
   * Ends a round at its limit even without a single winner.
   * Integer from 0 to 1.
   * Multiplayer; Debug and Mixed builds only.
   */
  sv_skip_winner_waiting: "sv_skip_winner_waiting",
  /**
   * Allows spectators to use the first-person camera.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_firsteye: "sv_spectr_firsteye",
  /**
   * Allows spectators to use the free-fly camera.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_freefly: "sv_spectr_freefly",
  /**
   * Allows spectators to use the free-look camera.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_freelook: "sv_spectr_freelook",
  /**
   * Allows spectators to use the look-at camera.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_lookat: "sv_spectr_lookat",
  /**
   * Allows spectators to use the team camera.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_spectr_teamcamera: "sv_spectr_teamcamera",
  /**
   * Prints or sets a team's starting money.
   * Multiplayer.
   */
  sv_startteammoney: "sv_startteammoney",
  /**
   * Has clients collect weapon usage statistics.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_statistic_collect: "sv_statistic_collect",
  /**
   * Writes the current round's statistics to the logs folder.
   * Multiplayer.
   */
  sv_statistic_save: "sv_statistic_save",
  /**
   * Shows server settings by running the `all_server_settings` config.
   * Multiplayer.
   */
  sv_status: "sv_status",
  /**
   * Ban duration for players exceeding the suspicious action limit.
   * One of the `g_ban_times` values.
   * Multiplayer.
   */
  sv_suspicious_actions_ban_time: "sv_suspicious_actions_ban_time",
  /**
   * Team kills allowed before a player is kicked.
   * Integer from 0 to 100.
   * Multiplayer.
   */
  sv_teamkill_limit: "sv_teamkill_limit",
  /**
   * Kicks players who reach the team kill limit.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_teamkill_punish: "sv_teamkill_punish",
  /**
   * Minutes a round lasts; zero disables the limit.
   * Integer from 0 to 180.
   * Multiplayer.
   */
  sv_timelimit: "sv_timelimit",
  /**
   * Selects compression and delta optimizations for server updates.
   * Multiplayer.
   */
  sv_traffic_optimization_level: "sv_traffic_optimization_level",
  /**
   * Unbans a player by index in the banned list.
   * Multiplayer.
   */
  sv_unbanplayer: "sv_unbanplayer",
  /**
   * Unbans an IP address.
   * Multiplayer.
   */
  sv_unbanplayer_ip: "sv_unbanplayer_ip",
  /**
   * Bitmask of vote types players may start; zero disables voting.
   * Integer from 0 to `0x00FF`.
   * Multiplayer.
   */
  sv_vote_enabled: "sv_vote_enabled",
  /**
   * Counts only players who voted when checking the vote quota.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_vote_participants: "sv_vote_participants",
  /**
   * Share of yes votes needed for a vote to pass.
   * Number from 0 to 1.
   * Multiplayer.
   */
  sv_vote_quota: "sv_vote_quota",
  /**
   * Minutes a vote stays open.
   * Number from 0.5 to 10.
   * Multiplayer.
   */
  sv_vote_time: "sv_vote_time",
  /**
   * Cancels the current vote.
   * Multiplayer.
   */
  sv_votestop: "sv_votestop",
  /**
   * Waits for all players to be ready before starting a round.
   * Integer from 0 to 1.
   * Multiplayer; Debug and Mixed builds only.
   */
  sv_wait_for_players_ready: "sv_wait_for_players_ready",
  /**
   * Seconds of warm-up at the start of a round.
   * Integer from 0 to 3600.
   * Multiplayer.
   */
  sv_warm_up: "sv_warm_up",
  /**
   * Writes outgoing server update packets to `updates.bins` in the logs folder.
   * Integer from 0 to 1.
   * Multiplayer.
   */
  sv_write_update_bin: "sv_write_update_bin",
  /**
   * Lowers texture quality by skipping top mip levels on load.
   * Integer from 0 to 4.
   */
  texture_lod: "texture_lod",
  /**
   * Slows time by `ui_time_factor` while the inventory is open; accepts on/off.
   */
  time_dilation_inventory: "time_dilation_inventory",
  /**
   * Slows time by `ui_time_factor` while the PDA is open; accepts on/off.
   */
  time_dilation_pda: "time_dilation_pda",
  /**
   * Sets the global simulation speed multiplier.
   * Not in gold builds.
   */
  time_factor: "time_factor",
  /**
   * Sets and applies the game time speed relative to real time.
   * Not in gold builds.
   */
  time_factor_single: "time_factor_single",
  /**
   * Reloads the user interface.
   */
  ui_restart: "ui_restart",
  /**
   * Selects the UI style; `ui_restart` applies it.
   */
  ui_style: "ui_style",
  /**
   * Sets the simulation speed used while time dilation is active.
   */
  ui_time_factor: "ui_time_factor",
  /**
   * Removes the primary key binding of an action.
   */
  unbind: "unbind",
  /**
   * Removes the console command bound to a key.
   */
  unbind_console: "unbind_console",
  /**
   * Removes the gamepad binding of an action.
   */
  unbind_gpad: "unbind_gpad",
  /**
   * Removes the secondary key binding of an action.
   */
  unbind_sec: "unbind_sec",
  /**
   * Removes all action and console-command bindings.
   */
  unbindall: "unbindall",
  /**
   * Screen color depth in bits; nothing reads it.
   * One of the `vid_bpp_token` values.
   * Debug and Mixed builds only.
   */
  vid_bpp: "vid_bpp",
  /**
   * Sets the screen resolution and, optionally, refresh rate.
   */
  vid_mode: "vid_mode",
  /**
   * Selects the monitor the game window uses.
   */
  vid_monitor: "vid_monitor",
  /**
   * Resets the video device to apply display changes.
   */
  vid_restart: "vid_restart",
  /**
   * Selects windowed, borderless or fullscreen display mode.
   */
  vid_window_mode: "vid_window_mode",
  /**
   * Makes the aim key toggle aiming instead of holding it.
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
