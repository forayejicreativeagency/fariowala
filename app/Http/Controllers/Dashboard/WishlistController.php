<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Wishlist;

class WishlistController extends Controller
{
    /**
     * Display a listing of the wishlists.
     */
    public function index()
    {
        $wishlists = Wishlist::with('user', 'product')->paginate(20);
        return view('dashboard.wishlist.index', compact('wishlists'));
    }
}
