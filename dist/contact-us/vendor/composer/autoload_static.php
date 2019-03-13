<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit58dc2b2f3f6de51e55861fcd31403268
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit58dc2b2f3f6de51e55861fcd31403268::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit58dc2b2f3f6de51e55861fcd31403268::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
