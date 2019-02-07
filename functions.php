<?php
/**
 * Js & Css assets for child theme.
 */
function twentynineteen_child_assets() {
	wp_enqueue_style( 'twentynineteen-style', get_template_directory_uri() . '/style.css' );
	if ( ! is_front_page() ) {
		return;
	}
	wp_enqueue_style( 'twentynineteen-child-style', get_stylesheet_directory_uri() . '/style.css' );
	wp_enqueue_script( 'twentynineteen-script-name', get_stylesheet_directory_uri() . '/react-infinite-scroll/dist/main.js', array(), '1.0.0', true );

}

add_action( 'wp_enqueue_scripts', 'twentynineteen_child_assets' );

/**
 * Modify API data for posts.
 */
function twentynineteen_child_modify_api_data() {
    register_rest_field( 'post',
        '_custom_data', // Add it to the response
        array(
            'get_callback'    => function( $object, $field_name, $request ){
            	return array(
            		'date' => get_the_date( '', $object['id'] ),
            		'featured_image' => twentynineteen_child_featured_image_data( $object['id'], $object ),
            		'categories' => twentynineteen_child_term_data( $object, 'category' ),
            		'tags' => twentynineteen_child_term_data( $object, 'post_tag' ),
            		'author' => array(
            			'name' => get_the_author_meta('display_name', (int) $object['author']),
            			'url' => get_author_posts_url( (int) $object['author'] ),
            		),
            	);
            }, // Callback function - returns the value
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
add_action( 'rest_api_init', 'twentynineteen_child_modify_api_data' );

/**
 * Get featured image info fro post.
 *
 * @param  int $post_id   Post ID.
 * @param  array $object  Post data.
 * @return array
 */
function twentynineteen_child_featured_image_data( $post_id, $object ) {
	if ( ! has_post_thumbnail( $post_id ) ) {
		return '';
	}

	return array(
		'url' => get_the_post_thumbnail_url( $post_id, 'medium' ),
		'caption' => wp_get_attachment_caption( (int) $object['featured_media'] ) ,
	);
}

/**
 * Custom tax data function.
 *
 * @param  array $object  Post data.
 * @param  string $tax    Tax name.
 * @return array
 */
function twentynineteen_child_term_data( $object, $tax ) {
	$categories = wp_get_post_terms( $object['id'], $tax );
	$separator = ' ';
	$output = array();
	if ( ! empty( $categories ) ) {
		foreach( $categories as $category ) {
		    $output[] =  array(
		    	'name' => esc_html( $category->name ),
		    	'url' => get_category_link( $category->term_id ),
		    );
		}
		return $output;
	}
}
