<?php

use Sami\Sami;
use Symfony\Component\Finder\Finder;
use Sami\Parser\Filter\TrueFilter;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('Resources')
    ->exclude('Tests')
    ->in('../../htdocs/src')
;

$sami = new Sami($iterator, array(
#    'theme'                => 'symfony',
    'title'                => 'TimeTM developers documentation',
    'build_dir'            => __DIR__.'/../sami',
    'cache_dir'            => __DIR__.'/../sami/.cache',
    'default_opened_level' => 2,
#    'simulate_namespaces'  => true
));

$sami['filter'] = function () {
    return new TrueFilter();
};

return $sami;
