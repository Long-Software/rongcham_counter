import { createQueue } from '@/app/api/service/createQueue'
import { getCategory } from '@/app/api/service/getCategory'
import Card from '@/components/Card'
import { Category } from '@prisma/client'
import React, { FormEvent, useEffect, useState } from 'react'

interface CategorySectionProps {
  token: string
  setCategoryId: (id: number | null) => void
  setReload: () => void
}
const CategorySection = ({ token, setCategoryId, setReload }: CategorySectionProps) => {
  const [categories, setCategories] = useState<Category[]>([])

  const hanldeSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const category_id =
      formData.get('category_id') == 'all' ? null : Number(formData.get('category_id'))
    setCategoryId(category_id)
  }

  useEffect(() => {
    getCategory(token).then(data => setCategories(data))
  }, [token])

  return (
    <div className='grid w-1/2 px-3 h-fit'>
      <Card title='Category Queue' className='bg-primary text-white'>
        <form onSubmit={hanldeSubmit}>
          <select className='select text-black my-3' name='category_id'>
            <option disabled selected>
              Select Queue
            </option>
            <option value='all'>Main Queue</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button type='submit' className='btn btn-info w-fit mb-3'>
            Submit
          </button>
        </form>
      </Card>

      <Card title='Queue Registration' className='bg-primary text-white mt-3'>
        <ul className='w-full py-3 px-2'>
          {categories.map(category => (
            <li key={category.id}>
              <button
                className='btn btn-accent w-full my-1'
                onClick={() => {
                  createQueue(token, category.id).then(() => setReload())
                }}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default CategorySection