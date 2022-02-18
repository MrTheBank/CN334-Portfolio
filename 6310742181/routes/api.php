<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\About;
use App\Http\Controllers\API\PortfolioAPI;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/skills', [About::class, 'skills']);
Route::get('/categories', [PortfolioAPI::class, 'categories']);
Route::get('/categories/{id}', [PortfolioAPI::class, 'getCategory']);
Route::get('/portfolios', [PortfolioAPI::class, 'portfolios']);
Route::get('/portfolios/{id}', [PortfolioAPI::class, 'getPortfolio']);
