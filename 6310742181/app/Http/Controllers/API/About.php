<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Skill;

class About extends Controller
{
    public function skills() {
        $ret = Skill::select('id', 'name', 'percentage')->orderBy('id', 'asc')->get();

        return response()->json($ret);
    }
}
