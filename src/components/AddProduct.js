import React from 'react'

const AddProduct = () => {
  return (
      <div>
        <h1>Add Product</h1>
        <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Price" />
            <button>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct