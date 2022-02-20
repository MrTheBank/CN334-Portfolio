<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    public function portfolio() {
        $portfolio = Portfolio::select('id', 'title', 'category_id')->orderBy('id', 'desc')->get();
        $category = Category::select('id', 'name')->orderBy('id', 'asc')->get();

        return view('admin.portfolio', compact('portfolio', 'category'));
    }

    public function portfoliosCreate(Request $request) {
        $validated = $request->validate([
            'title' => 'required',
            'category_id' => 'required|integer|exists:App\Models\Category,id',
            'background_url' => 'required|url',
            'album_url' => 'required|json',
            'description' => 'required|string'
        ]);

        Portfolio::create([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'background_url' => $request->background_url,
            'album_url' => $request->album_url,
            'description' => $request->description,
        ]);

        return redirect()->back();
    }

    public function portfoliosEdit(int $id) {
        $portfolio = Portfolio::select('id', 'title', 'category_id', 'background_url', 'album_url', 'description')->where('id', '=', $id)->first();
        $category = Category::select('id', 'name')->orderBy('id', 'asc')->get();

        return view('admin.portfolio_portfolios_edit', compact('portfolio', 'category'));
    }

    public function portfoliosEditSubmit(int $id, Request $request) {
        $validated = $request->validate([
            'title' => 'required',
            'category_id' => 'required|integer|exists:App\Models\Category,id',
            'background_url' => 'required|url',
            'album_url' => 'required|json',
            'description' => 'required|string'
        ]);

        Portfolio::where('id', '=', $id)->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'background_url' => $request->background_url,
            'album_url' => $request->album_url,
            'description' => $request->description,
        ]);

        return redirect('/admin/portfolio');
    }

    public function portfoliosDelete(int $id) {
        Portfolio::where('id', '=', $id)->delete();

        return redirect()->back();
    }

    public function categoriesCreate(Request $request) {
        $validated = $request->validate([
            'name' => 'required',
        ]);

        Category::create([
            'name' => $request->name,
        ]);

        return redirect()->back();
    }

    public function categoriesEdit(int $id) {
        $category = Category::select('id', 'name')->where('id', '=', $id)->first();

        return view('admin.portfolio_categories_edit', compact('category'));
    }

    public function categoriesEditSubmit(int $id, Request $request) {
        $validated = $request->validate([
            'name' => 'required',
        ]);

        Category::where('id', '=', $id)->update([
            'name' => $request->name,
        ]);

        return redirect('/admin/portfolio');
    }

    public function categoriesDelete(int $id) {
        Category::where('id', '=', $id)->delete();

        return redirect()->back();
    }
}
