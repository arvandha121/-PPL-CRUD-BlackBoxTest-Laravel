<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Sepatu;
use App\Models\User;

class SepatuTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_example()
    {
        $this->assertTrue(true);
    }

    public function test_sepatu_home()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/sepatu');
        $response->assertStatus(200);
    }

    public function test_store_data_sepatu()
    {
        Sepatu::create([
            'brand' => 'testing',
            'harga' => 20000,
            'warna' => 'pink',
            'ukuran' => 3,
            'gambar' => 'assets/img.jpg',
        ]);

        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/sepatu');

        $response->assertStatus(200);

        $response->assertSee('testing');
    }

    public function test_edit_data_sepatu()
    {
        $sepatu = Sepatu::create([
            'id_sepatu' => 3,
            'brand' => 'TestRenderEdittt',
            'harga' => 20000,
            'warna' => 'pink',
            'ukuran' => 3,
            'gambar' => 'assets/img.jpg',
        ]);

        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/sepatu/' . $sepatu->id_sepatu . '/edit');
        $response->assertStatus(200);

        $sepatu = Sepatu::where('brand', 'TestRenderEdittt')->update(['brand' => 'Edit sukses']);

        $response = $this->actingAs($user)->get('/sepatu');
    }

    public function test_delete_data_sepatu()
    {
        $sepatu = Sepatu::where('brand', 'Edit sukses')->delete();

        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/sepatu');
        $response->assertDontSee('Edit sukses');
    }
}
