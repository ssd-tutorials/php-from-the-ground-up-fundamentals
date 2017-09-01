<div id="navigation" class="show-for-medium-up">

    <a href="/"<?php echo activeClass('index'); ?>>HOME</a>
    <a href="/about"<?php echo activeClass('about'); ?>>ABOUT US</a>
    <a href="/products"<?php echo activeClass('products'); ?>>PRODUCTS</a>
    <a href="/contact"<?php echo activeClass('contact'); ?>>CONTACT US</a>

</div>

<form class="show-for-small-only">

    <select id="navigationSelect">

        <option value="/"<?php echo makeSelected('index'); ?>>HOME</option>
        <option value="/about"<?php echo makeSelected('about'); ?>>ABOUT US</option>
        <option value="/products"<?php echo makeSelected('products'); ?>>PRODUCTS</option>
        <option value="/contact"<?php echo makeSelected('contact'); ?>>CONTACT US</option>

    </select>

</form>