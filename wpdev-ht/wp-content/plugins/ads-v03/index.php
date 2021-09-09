<?php

/*
  Plugin Name: Kevel Ad Block V3
  Version: 0.3
  Author: HT
  Author URI: https://github.com/
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class adApi {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }
  function onInit() {
    //wp_register_script('es6Scripts', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_script('es6Scripts', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
    wp_register_style('es6Styles', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('es6/reactads', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'es6Scripts',
      'editor_style' => 'es6Styles'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('reactFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('reactFrontendStyle', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start(); ?>
    <div class="adwrapper"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }

  function renderCallbackBasic($attributes) {
    return '<div class="frontenddiv">Hello, the sky is ' . $attributes['skyColor'] . ' and the grass is ' . $attributes['grassColor'] . '.</div>';
  }
}

$adApi = new AdApi();