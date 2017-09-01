<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo getMetaTitle(); ?></title>
    <meta name="description" content="<?php echo getMetaDescription(); ?>">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link href="./assets/app.min.css" rel="stylesheet">
</head>
<body>

<section id="wrapper">

    <!-- PRE-HEADER -->

    <section id="preHeaderWrapper">

        <div class="row">

            <div class="medium-6 columns" id="preHeaderLeft">

                <p id="telephoneNumber">
                    Call us: 0800 800 800
                </p>

            </div>

            <div class="medium-6 columns" id="preHeaderRight">

                <nav id="socialButtons">

                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>

                </nav>

            </div>

        </div>

    </section>

    <!-- HEADER -->

    <section id="headerWrapper">

        <div class="row">

            <div class="large-5 columns" id="headerLeft">

                <div id="logo">
                    <a href="/">
                        Fruit Bowl
                    </a>
                </div>

            </div>
            <div class="large-7 columns" id="headerRight">

                <?php require_once('navigation.php') ?>

            </div>

        </div>

    </section>

    <!-- SLIDER -->

    <?php

    if (isHome()) {

        require_once('slider.php');

    }

    ?>

    <!-- CONTENT -->

    <section id="contentWrapper">

        <div class="row">

            <div class="column">