<?php
hide($content['comments']);
hide($content['links']);

/**
 * Parsing elements.
 */
function uri_to_string($image_uri) {
  $imguri = $image_uri;
  $imgurl = file_create_url($imguri);
  return $imgurl;
}

?>
<section class="<?php print $type; ?> lp-<?php  print $node->nid; ?>" id="lp-<?php print $node->nid; ?>">
    <div class="l-container">
        <?php
            $pathtotheme = drupal_get_path('theme','THEMENAME');
            drupal_add_css($pathtotheme.'/pub/css/lib/jquery.bxslider.css');
            drupal_add_js($pathtotheme.'/pub/js/lib/jquery.bxslider.js');
        ?>
        <div class="l-content">
            <div class="skew-slider">
                <ul class="skew-slides">
                    <?php
                    $imageuri = $img['uri'];$imageurl = file_create_url($imageuri);
                    // Image
                    if(isset($node->field_image['und'])) {
                        $images = $node->field_image['und'];
                    }
                    // Color HEX
                    if(isset($node->field_background_color['und'])) {
                        $colors = $node->field_background_color['und'];
                    }
                    // Titles
                    if(isset($node->field_column_title['und'])) {
                        $titles = $node->field_column_title['und'];
                    }
                    // Copy's
                    if(isset($node->field_column_content['und'])) {
                        $copys = $node->field_column_content['und'];
                    }
                    if (isset($titles,$images,$copys)) {
                        $images_length = count($images);

                        for ($key = 0; $key < $images_length; $key++) {
                            $color = $colors[$key]['value'];
                            $copy = $copys[$key]['safe_value'];
                            $title = $titles[$key]['safe_value'];
                            $img_url = file_create_url($images[$key]['uri']);
                            $background_style = 'style="background-image:url('.$img_url.');background-color:'.$color.'"';
                            $background_color = 'style="background-color:'.$color.'"';
                            ?>
                            <li class="slide" <?php print $background_color; ?>>
                                <div class="slide-container" <?php print $background_style; ?>>
                                    <h3><?php print $title; ?></h3>
                                    <?php print $copys[$key]['safe_value']; ?>
                                </div>
                            </li>
                        <?php
                        } // End for
                    } // If fields are not empty
                    ?>
                </ul>
            </div>
        </div>
    </div>
</section>

