<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Portfolio;

class PortfolioAPI extends Controller
{
    public function categories() {
        $ret = Category::select('id', 'name')->orderBy('id', 'asc')->get();

        return response()->json($ret);
    }

    public function getCategory(int $id) {
        $ret = Portfolio::select('id', 'title', 'background_url')->where('category_id', '=', $id)->orderBy('id', 'asc')->get();

        return response()->json($ret);
    }

    public function portfolios() {
        $ret = Portfolio::select('id', 'title', 'background_url')->orderBy('id', 'desc')->get();

        return response()->json($ret);
    }

    public function getPortfolio(int $id) {
        $ret = Portfolio::select('id', 'title', 'background_url', 'description', 'album_url')->where('id', '=', $id)->first();

        return response()->json($ret);
    }
}
