<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\PortfolioController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index.home');
});

Route::get('/about', function () {
    return view('index.about');
});

Route::get('/contact', function () {
    return view('index.contact');
});

Route::middleware(['auth.guest'])->group(function () {
    Route::get('/admin/auth', [AuthController::class, 'auth']);
    Route::post('/admin/auth', [AuthController::class, 'authProcess']);
});

Route::middleware(['auth'])->group(function () {
    Route::get('/admin', function () {
        return view('admin.home');
    });
    Route::get('/admin/logout', function (Request $request) {
        $request->session()->flush();

        return redirect('/');
    });
    Route::get('/admin/skills', [SkillController::class, 'skills']);
    Route::post('/admin/skills', [SkillController::class, 'skillsCreate']);
    Route::get('/admin/skills/{id}', [SkillController::class, 'skillsEdit']);
    Route::post('/admin/skills/{id}', [SkillController::class, 'skillsEditSubmit']);
    Route::delete('/admin/skills/{id}', [SkillController::class, 'skillsDelete']);

    Route::get('/admin/portfolio', [PortfolioController::class, 'portfolio']);
    Route::post('/admin/portfolio/portfolios', [PortfolioController::class, 'portfoliosCreate']);
    Route::get('/admin/portfolio/portfolios/{id}', [PortfolioController::class, 'portfoliosEdit']);
    Route::post('/admin/portfolio/portfolios/{id}', [PortfolioController::class, 'portfoliosEditSubmit']);
    Route::delete('/admin/portfolio/portfolios/{id}', [PortfolioController::class, 'portfoliosDelete']);

    Route::post('/admin/portfolio/categories', [PortfolioController::class, 'categoriesCreate']);
    Route::get('/admin/portfolio/categories/{id}', [PortfolioController::class, 'categoriesEdit']);
    Route::post('/admin/portfolio/categories/{id}', [PortfolioController::class, 'categoriesEditSubmit']);
    Route::delete('/admin/portfolio/categories/{id}', [PortfolioController::class, 'categoriesDelete']);
});
