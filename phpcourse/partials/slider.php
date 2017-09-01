<?php

$slides = getSlides();

if (empty($slides)) {
    return null;
}

?>
<section id="sliderWrapper">

    <div class="slider">

        <?php foreach($slides as $slide) { ?>

            <div class="slide">

                <img
                    src="<?php echo sliderDir() . $slide['file']; ?>"
                    alt="<?php echo $slide['caption']; ?>"
                    >

            </div>

        <?php } ?>

    </div>

</section>