import { createQueue } from '@/app/api/service/queues/createQueue'
import { getCategory } from '@/app/api/service/getCategory'
import Card from '@/components/Card'
import useUser from '@/components/hooks/useUser'
import { Category } from '@prisma/client'
import React, { FormEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface CategorySectionProps {
  setCategoryId: (id: number | null) => void
  setReload: () => void
}
const CategorySection = ({ setCategoryId, setReload }: CategorySectionProps) => {
  const [categories, setCategories] = useState<Category[]>([])
  const { user } = useUser()

  const hanldeSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const category_id =
      formData.get('category_id') == 'all' ? null : Number(formData.get('category_id'))
    setCategoryId(category_id)
  }
  const handleCreateQueue = async (token: string, category_id: number) =>
    createQueue(token, category_id)
      .then(data => {
        setReload()
        toast.success(data.message)
      })
      .catch(error => toast.error(error))

  useEffect(() => {
    if (user) getCategory(user.id).then(data => setCategories(data.data))
  }, [user])

  if (user)
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
                  onClick={() => handleCreateQueue(user.id, category.id)}>
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
