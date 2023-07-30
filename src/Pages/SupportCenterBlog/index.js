import React from 'react';
import Breadcrumb01 from '../../Components/Breadcrumb/Breadcrumb01';
import Title01 from '../../Components/Title/Title01';
import { OxhainSupportCenterBlog } from './SupportCenterBlog.styled';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const SupportCenterBlog = () => {
    const blogItems = [
        {
            image: 'https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            tags: ['Leadership', 'Leadership'],
            title: 'Guide on How to Join KuCoin Content Creator Program',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
            createdAt: '2022/08/02 15:04:07'
        },
        {
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            tags: ['Leadership', 'Leadership'],
            title: 'Guide on How to Join KuCoin Content Creator Program',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
            createdAt: '2022/08/02 15:04:07'
        },
        {
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            tags: ['Leadership', 'Leadership'],
            title: 'Guide on How to Join KuCoin Content Creator Program',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
            createdAt: '2022/08/02 15:04:07'
        },
        {
            image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80',
            tags: ['Leadership', 'Leadership'],
            title: 'Guide on How to Join KuCoin Content Creator Program',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
            createdAt: '2022/08/02 15:04:07'
        },
        {
            image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
            tags: ['Leadership', 'Leadership'],
            title: 'Guide on How to Join KuCoin Content Creator Program',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
            createdAt: '2022/08/02 15:04:07'
        },
        {
            image: 'https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
            tags: ['Leadership', 'Leadership'],
            title: 'Guide on How to Join KuCoin Content Creator Program',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
            createdAt: '2022/08/02 15:04:07'
        },
    ]

    return (
        <OxhainSupportCenterBlog className="pt-40 pb-20">
            <div className="container text-left">
                <Breadcrumb01
                    label1="Support Center"
                    label2="Oxhain Blog"
                    link1="/support-center"
                    link2="/support-center/blog"
                />

                <Title01 className="block text-left">Oxhain Blog</Title01>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pretium tristique lacinia volutpat ultrices iaculis in a.</p>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="mt-10 blog"
                    pagination={{ clickable: true }}
                    navigation={true}
                >
                    {blogItems.map(blogItem => (
                        <SwiperSlide className='blog-item px-20'>
                            <div className='flex flex-row items-center h-72'>
                                <img className='w-4/12 h-64 rounded-sm mr-11' src={blogItem.image} alt="" />

                                <div className='flex flex-col flex-1'>
                                    <span className="!text-2xl !font-normal w-6/12">{blogItem.title}</span>
                                    <p className='mt-4'>{blogItem.description}</p>
                                    <span className='blog-item-date mt-3 text-sm'>{blogItem.createdAt}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='flex flex-row flex-wrap mt-24 text-sm'>
                    <button className='background07 w-36 h-9 mr-4 mb-4'>
                        <p className='!font-medium'>Leadership</p>
                    </button>
                    <button className='text53 w-36 h-9 mr-4 mb-4 background72'>
                        <p>Leadership</p>
                    </button>
                    <button className='text53 w-36 h-9 mr-4 mb-4 background72'>
                        <p>Leadership</p>
                    </button>
                    <button className='text53 w-36 h-9 mr-4 mb-4 background72'>
                        <p>Leadership</p>
                    </button>
                    <button className='text53 w-36 h-9 mr-4 mb-4 background72'>
                        <p>Leadership</p>
                    </button>
                    <button className='text53 w-36 h-9 mr-4 mb-4 background72'>
                        <p>Leadership</p>
                    </button>
                    <button className='text53 w-36 h-9 mr-4 mb-4 background72'>
                        <p>Leadership</p>
                    </button>
                    <button className='text53 w-36 h-9 mr-4 mb-4 background72'>
                        <p>Leadership</p>
                    </button>
                    <button className='text53 w-36 h-9 mr-4 mb-4 background72'>
                        <p>Leadership</p>
                    </button>
                </div>

                <div className='flex flex-row flex-wrap my-16'>
                    <div className='flex flex-row mr-3 w-96 h-10'>
                        <input className='search-input w-full pl-8 pr-4 font-light' placeholder='Search'></input>
                    </div>

                    <button className='text53 w-36 h-10 mr-4 text-sm text-white'>Search</button>
                </div>

                <div className='flex flex-row flex-wrap'>
                    {blogItems.map(blogItem => (
                        <div className='flex flex-col w-4/12 pr-6 mb-14'>
                            <img className='w-full h-64 mt-6 rounded-sm' src={blogItem.image} alt="" />

                            <div className='flex flex-row flex-wrap mt-2 text-sm'>
                                {blogItem.tags.map(tag => (
                                    <button className='text53 w-36 h-9 mr-4 background72 mt-4'>
                                        <p>{tag}</p>
                                    </button>
                                ))}
                            </div>
                            <span className="!text-xl !font-normal w-9/12 mt-5">{blogItem.title}</span>
                            <p className='mt-4'>{blogItem.description}</p>
                            <span className='blog-item-date mt-3 text-sm'>{blogItem.createdAt}</span>
                        </div>
                    ))}
                </div>
            </div>
        </OxhainSupportCenterBlog>
    )
}

export default SupportCenterBlog;