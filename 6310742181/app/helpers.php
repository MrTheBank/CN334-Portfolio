<?php

function navbarActive($path) {
    return request()->is($path) ? 'active' : '';
}
