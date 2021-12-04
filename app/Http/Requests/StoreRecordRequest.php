<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRecordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|uuid|exists:users,id',
            'category_id' => 'required|uuid|exists:categories,id',
            'record_name' => 'required|string|min:3|max:50',
            'record_user' => 'nullable|string|max:50',
            'record_email' => 'nullable|string|max:50',
            'record_password' => 'required|string|max:50',
            'record_url' => 'nullable|string|max:100',
            'record_phone' => 'nullable|string|min:10|max:20',
            'record_notes' => 'nullable|string|max:255',
        ];
    }
}
