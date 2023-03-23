// React
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// Next
import { useRouter } from 'next/router'
import Image from 'next/image'

// Utils
import { LEADERBOARD_URL } from '../utils/constants/constants'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const router = useRouter()
  return (
    <>
      <div className="fixed mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-50">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                width={50}
                height={50}
                priority
              />
            </div>
            <div className="ml-4 sm:ml-6 sm:flex sm:space-x-8">
              <button
                onClick={() => router.push(LEADERBOARD_URL)}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer */}
      <div className="h-16 w-full"></div>
    </>
  )
}

export default Navbar
