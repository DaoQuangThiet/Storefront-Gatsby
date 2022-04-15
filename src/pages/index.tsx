import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { CollectionCard } from "../components/collection-card"
import { CategoriNewprint } from "../components/categori-newprint"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      vendure {
        collections {
          items {
            id
            name
            description
            slug
            featuredAsset {
              id
              preview
              imageFile {
                childImageSharp {
                  gatsbyImageData(width: 300, height: 300, quality: 85)
                }
              }
            }
          }
        }
      }
    }
  `)
  const collections = data.vendure.collections.items
  const headerImage = getImage(collections[0]?.featuredAsset.imageFile);
  return (
    <Layout>
      <Seo title="Home" />
      {/* Hero section */}
      <div className="relative">
        <Carousel >
          <Carousel.Item interval={2500}  >
            <StaticImage src="../images/slider2.png" alt="Slider 01" layout="fixed" />
          </Carousel.Item>
          <Carousel.Item interval={2500} >
            <StaticImage src="../images/slider02.png" alt="Slider 01" layout="fixed" />
          </Carousel.Item>
          <Carousel.Item interval={2500} >
            <StaticImage src="../images/slider03.png" alt="Slider 01" layout="fixed" />
          </Carousel.Item>
        </Carousel>
        {/* Decorative image and overlay */}
        {/* <div aria-hidden="true" className="absolute inset-0 overflow-hidden"> */}
        {
            // <StaticImage src="../images/slidercanva.png" alt="Slider 01" layout="fixed" />
          /* {headerImage ? (
            <GatsbyImage
              alt="header"
              image={headerImage}
              className="absolute inset-0"
            />
          ) : (
            <img
              className="absolute inset-0 w-full"
              src={collections[0]?.featuredAsset.preview + "?w=500"}
              alt="header"
            />
          )} */}
        {/* <div className="absolute inset-0 bg-[url('../images/slidercanva.png')]" /> */}
        {/* </div> */}
        {/* <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        /> */}
        {/* <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center h-[820px] sm:py-64 lg:px-0"> */}
        {/* <h1 className="text-5xl font-light tracking-tight text-white lg:text-6xl">
            Vendure Gatsby Starter
          </h1>
          <p className="mt-4 text-xl text-white">
            A headless commerce storefront starter kit built with{" "}
            <a
              href="https://www.vendure.io"
              className="text-blue-300 hover:text-blue-500"
            >
              Vendure
            </a>{" "}
            &{" "}
            <a
              href="https://www.gatsbyjs.com/"
              className="text-purple-300 hover:text-purple-500"
            >
              Gatsby
            </a>
          </p> */}
        {/* </div> */}
      </div>

      {/* BUSINESS CART */}
      <div className="p-[65px] flex items-center space-x-8">
        <div className="relative w-[595px] flex items-center space-x-8">
          <div className="absolute content_left">
            <StaticImage
              src="../images/image1.jpg"
              width={598}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Vendure logo"
            />
          </div>
          <div className="relative pb-[80px]">
            <h4 className="text-lg font-medium text-gray-800">BUSINESS CARD</h4>
            <div className="text-blue-600 font-bold text-4xl">NOW 25% OFF.</div>
            <h5 className="text-gray-500 text-lg ">Savings on select products starting</h5>
            <h5 className="text-gray-500 text-lg "> at 25% off. Discount percentages</h5>
            <h5 className="text-gray-500 text-lg ">  may vary on options, upgrades,</h5>
            <h5 className="text-gray-500 text-lg "> & accessories.</h5>
            <div className="absolute pt-[10px]">
              <button className="border-solid border-1 border-blue-400 font-bold rounded text-xs hover:bg-blue-500	w-[89px] h-[30px] text-blue-400 p-[5px] hover:text-gray-50">SHOP NOW !</button>
            </div>
          </div>

        </div>
        <div className="relative w-[594.33px] flex items-center space-x-8">
          <div className="absolute content_left2">
            <StaticImage
              src="../images/image2.jpg"
              width={598}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Vendure logo"
            />
          </div>
          <div className="relative  pb-[80px]">
            <h4 className="text-lg font-medium text-gray-800">BUSINESS CARD</h4>
            <div className="text-blue-600 font-bold text-4xl">NOW 5% OFF.</div>
            <h5 className="text-gray-500 text-lg">Savings on select products starting</h5>
            <h5 className="text-gray-500 text-lg" >at 5% off. Discount percentages</h5>
            <h5 className="text-gray-500 text-lg" >may vary on options, upgrades,</h5>
            <h5 className="text-gray-500 text-lg">& accessories.</h5>
            <div className="absolute pt-[10px]">
              <button className="border-solid border-1 border-blue-400 font-bold rounded text-xs hover:bg-blue-500	w-[89px] h-[30px] text-blue-400 p-[5px] hover:text-gray-50">SHOP NOW !</button>
            </div>
          </div>

        </div>
        <div className="relative w-[594.33px] flex items-center space-x-8">
          <div className="absolute content_left3">
            <StaticImage
              src="../images/image3.jpg"
              width={598}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Vendure logo"
            />
          </div>
          <div className="relative  pb-[80px]">
            <h4 className="text-lg font-medium text-gray-800">BUSINESS CARD</h4>
            <div className="text-blue-600 font-bold text-4xl">NOW 10% OFF.</div>
            <h5 className="text-gray-500 text-lg">Savings on select products starting</h5>
            <h5 className="text-gray-500 text-lg"> at 10% off. Discount percentages</h5>
            <h5 className="text-gray-500 text-lg">  may vary on options, upgrades,</h5>
            <h5 className="text-gray-500 text-lg"> & accessories.</h5>
            <div className="absolute pt-[10px]">
              <button className="border-solid border-1 border-blue-400 font-bold rounded text-xs hover:bg-blue-500	w-[89px] h-[30px] text-blue-400 p-[5px] hover:text-gray-50">SHOP NOW !</button>
            </div>
          </div>
        </div>
      </div>


      {/***************NEW PRINT TEMPLATES*****************/}
      <div className="con_newprint container">
        <div className="h_newprint">
          <div className="cont_newprint">
            <div className="cont_1 text-center">
              <h4 className="">NEW PRINT TEMPLATES</h4>
              <p className="">THINGS WE KNOW YOU'LL LOVE</p>
            </div>
            <div className="cont2 p-3">
              <ul className="btn_cate flex space-x-3 pl-[340px]">
                 <Link to="#" className="no-underline">
                   <li className="border-solid border-1 border-slate-500 text-slate-500  font-bold rounded text-sm bg-blue-500 text-gray-50 p-2">ALL TYPES</li>
                 </Link>
                 <Link to="#" className="no-underline">
                   <li className="border-solid border-1 border-slate-500 text-slate-500  font-bold rounded text-sm hover:bg-blue-500 hover:text-gray-50 p-2">SQUARE</li>
                 </Link>
                 <Link to="#" className="no-underline">
                   <li className="border-solid border-1 border-slate-500 text-slate-500  font-bold rounded text-sm hover:bg-blue-500 hover:text-gray-50 p-2">MINI</li>
                 </Link>
                 <Link to="#" className="no-underline">
                   <li className="border-solid border-1 border-slate-500 text-slate-500  font-bold rounded text-sm hover:bg-blue-500 hover:text-gray-50 p-2">ROUNDED CORNER</li>
                 </Link>
                 <Link to="#" className="no-underline">
                   <li className="border-solid border-1 border-slate-500 text-slate-500  font-bold rounded text-sm hover:bg-blue-500 hover:text-gray-50 p-2">FOLDED</li>
                 </Link>
                 <Link to="#" className="no-underline">
                     <li className="border-solid border-1 border-slate-500 text-slate-500  font-bold rounded text-sm hover:bg-blue-500 hover:text-gray-50 p-2">PERFORATED</li>
                 </Link>
              </ul>
            </div>
          </div>
          {/***************TAB PRODUCT**************/}
          <div className="tab_product">
            <div className="grid_product grid grid-cols-4 gap-5 ">
              <div className="single_product">
                <div className="img_product">
                  <Link to="#" className="no-underline"> 
                    <StaticImage
                        src="../images/01.jpg"
                        width={598}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Vendure logo"
                      />
                  </Link>
                </div>
                <div className="title_product">
                 <Link to="#" className="no-underline">
                  <p className="text-slate-700 text-lg	font-medium mt-[20px] hover:text-blue-500">Pro Card Visit A1 (Copy)</p>
                 </Link>
                </div>
                <div className="price_product">
                  <p className="text-blue-600 font-bold text-lg">10$</p>
                </div>
                <div className="des_product">
                  <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="single_product">
                <div className="img_product ">
                  <Link to="#" className="no-underline">
                    <StaticImage
                      src="../images/02.jpg"
                      width={598}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Vendure logo"
                    />
                  </Link>
                </div>
                <div className="title_product">
                  <Link to="#" className="no-underline">
                  <p className="text-slate-700 text-lg	font-medium mt-[20px] hover:text-blue-500">Pro Card Visit A1 (Copy)</p>
                 </Link>
                </div>
                <div className="price_product">
                  <p className="text-blue-600 font-bold text-lg">10$</p>
                </div>
                <div className="des_product">
                  <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="single_product">
                <div className="img_product ">
                  <Link to="#" className="no-underline">
                    <StaticImage
                      src="../images/03.jpg"
                      width={598}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Vendure logo"
                    />
                  </Link>
                </div>
                <div className="title_product">
                  <Link to="#" className="no-underline">
                  <p className="text-slate-700 text-lg	font-medium mt-[20px] hover:text-blue-500">Pro Card Visit A1 (Copy)</p>
                 </Link>
                </div>
                <div className="price_product">
                  <p className="text-blue-600 font-bold text-lg">10$</p>
                </div>
                <div className="des_product">
                  <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="single_product">
                <div className="img_product ">
                  <Link to="#" className="no-underline">
                    <StaticImage
                      src="../images/04.jpg"
                      width={598}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Vendure logo"
                    />
                  </Link>
                </div>
                <div className="title_product">
                  <Link to="#" className="no-underline">
                  <p className="text-slate-700 text-lg	font-medium mt-[20px] hover:text-blue-500">Pro Card Visit A1 (Copy)</p>
                 </Link>
                </div>
                <div className="price_product">
                  <p className="text-blue-600 font-bold text-lg">10$</p>
                </div>
                <div className="des_product">
                  <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="single_product">
                <div className="img_product ">
                  <Link to="#" className="no-underline">
                    <StaticImage
                      src="../images/05.jpg"
                      width={598}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Vendure logo"
                    />
                  </Link>
                </div>
                <div className="title_product">
                  <Link to="#" className="no-underline">
                  <p className="text-slate-700 text-lg	font-medium mt-[20px] hover:text-blue-500">Pro Card Visit A1 (Copy)</p>
                 </Link>
                </div>
                <div className="price_product">
                  <p className="text-blue-600 font-bold text-lg">10$</p>
                </div>
                <div className="des_product">
                  <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="single_product">
                <div className="img_product ">
                  <Link to="#" className="no-underline">
                    <StaticImage
                      src="../images/06.jpg"
                      width={598}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Vendure logo"
                    />
                  </Link>
                </div>
                <div className="title_product">
                  <Link to="#" className="no-underline">
                  <p className="text-slate-700 text-lg	font-medium mt-[20px] hover:text-blue-500">Pro Card Visit A1 (Copy)</p>
                 </Link>
                </div>
                <div className="price_product">
                  <p className="text-blue-600 font-bold text-lg">10$</p>
                </div>
                <div className="des_product">
                  <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="single_product">
                <div className="img_product ">
                  <Link to="#" className="no-underline">
                    <StaticImage
                      src="../images/07.jpg"
                      width={598}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Vendure logo"
                    />
                  </Link>
                </div>
                <div className="title_product">
                  <Link to="#" className="no-underline">
                  <p className="text-slate-700 text-lg	font-medium mt-[20px] hover:text-blue-500">Pro Card Visit A1 (Copy)</p>
                 </Link>
                </div>
                <div className="price_product">
                  <p className="text-blue-600 font-bold text-lg">10$</p>
                </div>
                <div className="des_product">
                  <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="single_product">
                <div className="img_product ">
                  <Link to="#" className="no-underline">
                    <StaticImage
                      src="../images/08.jpg"
                      width={598}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Vendure logo"
                    />
                  </Link>
                </div>
                <div className="title_product">
                  <Link to="#" className="no-underline">
                  <p className="text-slate-700 text-lg	font-medium mt-[20px] hover:text-blue-500">Pro Card Visit A1 (Copy)</p>
                 </Link>
                </div>
                <div className="price_product">
                  <p className="text-blue-600 font-bold text-lg">10$</p>
                </div>
                <div className="des_product">
                  <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/********HOW WE MAKE PRINTING AS EASY************/}
       <div className="relative pt-[100px]">
          <div className="bg-fixed h-[660px] bg-[url('../images/a11.jpg')]">
                {/* <StaticImage
                  className="w-full h-[660px]"
                  src="../images/a1.jpg"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Vendure logo"
                /> */}
                <div className="top_howme container text-center pt-[50px]">
                    <h4>HOW WE MAKE PRINTING AS EASY</h4>
                    <p>CHOOSE THE DESIGN PATH THAT IS RIGHT BEFORE UPLOAD FILE</p>
                  </div>
                <div className="button_howme flex items-center space-x-28  container">
                    <div className="left_img p-[10px] ">
                      <StaticImage
                        src="../images/a2.png"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Vendure logo"
                      />
                    </div>
                    <div className="right_content">
                      <div className="icon"></div>
                      <div className="content ">
                        <div className="ct_one">
                          <h5>1. Select Options</h5>
                          <p>Choose options that you want for your prints.We will </p>
                          <p>make you happy with your choices.</p>
                        </div>
                        <div className="ct_two">
                          <h5>2. Upload your design</h5>
                          <p>Upload your finished design here and we'll print it for you</p>
                          <p>with your choices.</p>
                        </div>
                        <div className="ct_three">
                          <h5>3. Checkout & Order</h5>
                          <p>Checkout and finish your order very easy with one step</p>
                          <p> checkout extension.</p>
                        </div>
                      </div>
                    </div>
                </div>
          </div>
      </div>

      {/************OUR SERVICES*********/}



      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            className="text-2xl font-light tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible">
              <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8">
                {collections.map(category => (
                  <CollectionCard collection={category}></CollectionCard>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
