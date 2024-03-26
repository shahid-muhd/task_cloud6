"use client";
import { getProductDetails } from "@/api/productDetailsApi";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { Progress } from "@/components/ui/progress";
import * as React from "react";
import { FaPlus } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Layout,
  Menu,
  theme,
  Col,
  Divider,
  Row,
  Avatar,
  Card as AntdCard,
  Image as AntdImage,
  Space,
  Rate,
} from "antd";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useEffect, useState } from "react";
import { SlBag } from "react-icons/sl";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineMinusCircle } from "react-icons/hi2";
import { CiMoneyCheck1 } from "react-icons/ci";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
export default function Home() {
  const { Header, Content, Footer, Sider } = Layout;
  const [currentVariant, setCurrentVariant] = useState<any>({});
  const [productData, setProductData] = useState<any>();
  const [coverImage, setCoverImage] = useState("");
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    getProductDetails().then((res) => {
      setCurrentVariant(res.data.current_variant);
      setProductData(res.data.product_data);
      setCoverImage(res.data.current_variant.variant_images[0]);
      console.log(res.data);
      console.log(res.data.current_variant);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="container  p-0 m-0">
        <section className="flex h-fit  max-h-fit w-full  relative  ">
          <div className="product-visual-details p-5 text-justify h-full max-h-fit  w-6/12 sticky top-5 z-10 ">
            <div className="p-5">
              <Layout>
                <Sider theme="light" style={{ bottom: 0, top: 0, left: 0 }}>
                  <Menu
                    defaultSelectedKeys={["1"]}
                    style={{ paddingTop: "10px" }}
                  >
                    {currentVariant &&
                      currentVariant.variant_images?.map(
                        (imageUrl: any, index: number) => (
                          <Menu.Item
                            onClick={() => {
                              setCoverImage(imageUrl);
                            }}
                            key={index}
                            style={{
                              height: "130px",
                              width: "150px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Space>
                              <AntdImage
                                style={{
                                  borderRadius: 20,
                                  height: 130,
                                  width: 150,
                                }}
                                preview={false}
                                src={base_url + imageUrl}
                              />
                            </Space>
                          </Menu.Item>
                        )
                      )}
                  </Menu>
                </Sider>
                <Content
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                  }}
                  className="shadow-sm"
                >
                  {coverImage && (
                    <AntdImage
                      style={{
                        width: 470,
                        height: 400,
                        borderRadius: 20,
                      }}
                      src={base_url + coverImage}
                      alt="product-image"
                    />
                  )}
                </Content>
              </Layout>
            </div>
          </div>

          <div className="product-text-details   w-5/12 h-svh box-border p-5  ml-auto gap-y-5">
            <div className="title-div font-bold leading-7">
              <h2 className="font-bold">{currentVariant.name}</h2>

              <a href={base_url + "/" + currentVariant.brand_link}>
                {" "}
                <p className="font-normal underline">
                  By {currentVariant.brand_name}
                </p>
              </a>
            </div>

            <div className="price-container flex w-28 justify-around mt-5 gap-5  ">
              <div className="current-price flex gap-2">
                <div className="currency font-bold">
                  {currentVariant?.currency_code}
                </div>
                <div className="price-amount font-bold">
                  {currentVariant?.price_amount}
                </div>
              </div>
              <div className="original-price flex gap-2">
                <div className="currency font-bold">
                  {currentVariant?.currency_code}
                </div>
                <s>{currentVariant?.original_amount}</s>
              </div>

              <div className="offer-wrapper min-w-fit w-fit text-green-500 font-semibold">
                <p>{currentVariant?.discount_percentage}</p>
              </div>
            </div>

            <div className="cart-buttons-wrapper flex gap-10 items-center mt-5">
              <Button className="px-10 rounded-md">
                Add to Bag{" "}
                <span className="ml-3">
                  <SlBag size={20} />{" "}
                </span>{" "}
              </Button>

              <div className="count-btn-group flex items-center gap-3">
                <HiOutlineMinusCircle size={30} />
                <input
                  type="number"
                  placeholder="1"
                  className="w-24 h-7 border-2 border-black  rounded-xl text-center"
                />
                <AiOutlinePlusCircle size={30} />
              </div>
            </div>

            <div className="color-selector-wrapper mt-5  rounded-lg">
              <div className="title">
                <p>Color</p>
              </div>
              <div className="color-selecto flex gap-5 mt-3 ">
                <div className="color-variant ">
                  <img
                    className="w-20 h-20"
                    src="https://bit.ly/4a8OCd9"
                    alt=""
                  />
                </div>
                <div className="color-variant  ">
                  <img
                    className="w-20 h-20"
                    src="https://bit.ly/4a8OCd9"
                    alt=""
                  />
                </div>
                <div className="color-variant   ">
                  <img
                    className="w-20 h-20"
                    src="https://bit.ly/4a8OCd9"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="message-wrapper mt-10  w-fit  py-2 bg-slate-100 p-5 rounded-lg ">
              <div className="flex gap-5 ">
                <CiShoppingCart size={24} />
                <p>{productData?.message_1}</p>
              </div>
              <div className="flex gap-5 mt-3">
                <CiMoneyCheck1 size={24} />
                <p>{productData?.message_2}</p>
              </div>
            </div>

            <div className="payment-offer-wrapper mt-5 bg-slate-100 p-5 rounded-lg">
              <div className="flex gap-5 ">
                <div>
                  <Image
                    width={80}
                    height={80}
                    src="/images/logo_tabby.svg"
                    alt="tabby"
                  ></Image>
                </div>

                <div>
                  <p>{productData?.tabby_text}</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <div>
                  <Image
                    width={80}
                    height={80}
                    src="/images/logo_tamara.svg"
                    alt="tamara"
                  ></Image>
                </div>

                <div>
                  <p>{productData?.tamara_text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-x-10">
          {" "}
          <div className="description col-span-1   leading-8">
            <div className="description-title">
              <h6 className="font-bold">Description</h6>
            </div>
            <div className="description-content text-justify mt-2">
              <p>{productData?.description}</p>
            </div>
          </div>
          <div className="product-details  col-span-1 px-28">
            <div className="title">
              <h6 className="font-bold">PRODUCT DETAILS</h6>
            </div>
            <div className="details-content mt-2  px-7 ">
              <div>
                <ul className="max-w-md space-y-2 list-disc list-outside flex justify-between items-center leading-10  w-full ">
                  <div className="">
                    <li>
                      <p>SKU: {currentVariant?.sku}</p>
                    </li>
                    <li>
                      {" "}
                      <p>Colour:</p>
                    </li>
                    <li>
                      <p>Colour:</p>
                    </li>
                  </div>

                  <div className="">
                    <li>
                      <p>SKU: {currentVariant?.sku}</p>
                    </li>
                    <li>
                      {" "}
                      <p>Colour:</p>
                    </li>
                    <li>
                      <p>Colour:</p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </section>
        <Separator className="mt-5 mb-10 h-0.5 " />

        <section className="w-full  grid grid-cols-2 gap-x-5">
          <div
            className={`advertisement-wrapper rounded-lg w-full h-full col-span-1 `}
          >
            <img
              className="rounded-lg h-full w-full"
              src={base_url + productData?.type_banner_image}
              alt="image"
            />
          </div>

          <div className="return-policy col-span-1 leading-10 px-24 ">
            <div>
              <div className="font-bold mb-3">
                <h3>RETURN POLICY</h3>
              </div>

              <div>
                <p>{productData?.return_text_1}</p>
                <p className="font-extrabold">{productData?.return_text_2}</p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="mt-10 h-0.5 " />

        <section className="mt-5 grid grid-cols-5 gap-5">
          <div className="col-span-3 pr-20  ">
            <Tabs
              defaultValue="product_rating"
              className=" mb-24 bg-transparent "
            >
              <TabsList
                defaultValue="account"
                className="bg-transparent flex justify-start gap-20  mb-14 p-0"
              >
                <TabsTrigger
                  className="bg-transparent p-0 font-bold"
                  value="product_rating"
                >
                  PRODUCT RATING
                </TabsTrigger>
                <TabsTrigger
                  className="bg-transparent p-0 font-bold"
                  value="brand_reviews"
                >
                  BRAND REVIEWS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="product_rating">
                <div className=" w-full ">
                  <div>
                    <div className="title flex gap-2">
                      <div className="avg-rating text-5xl font-extrabold">
                        <p>4.5</p>
                      </div>
                      <div className="text-base font-semibold">
                        <p>Based On</p>
                        <p>40 Ratings and 0 Reviews</p>
                      </div>
                    </div>
                    <div className="subtitle mt-5">
                      <div className="customer-recomendation flex items-center gap-3">
                        <div className="like-wrapper">
                          <BiLike />
                        </div>
                        <div className="recomendation-text">
                          97% of customers recommend this product{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rating-graph-wrapper mt-10  ">
                    <div className="grid gap-y-8">
                      <div className="rating-graph grid grid-flow-col items-center grid-cols-12  text-sm">
                        <div className="ratting-text flex items-center gap-1 col-span-1 font-semibold">
                          <p>5</p>{" "}
                          <div>
                            <IoIosStar />
                          </div>
                        </div>

                        <div className="bar col-span-10 ">
                          <Progress value={63} className="h-3 w-full " />
                        </div>
                        <div className="customer-number col-span-1 font-semibold text-slate-400 px-3">
                          <p>25</p>
                        </div>
                      </div>
                      <div className="rating-graph grid grid-flow-col items-center grid-cols-12  text-sm">
                        <div className="ratting-text flex items-center gap-1 col-span-1 font-semibold">
                          <p>4</p>{" "}
                          <div>
                            <IoIosStar />
                          </div>
                        </div>

                        <div className="bar col-span-10 ">
                          <Progress value={43} className="h-3 w-full" />
                        </div>
                        <div className="customer-number col-span-1 font-semibold text-slate-400 px-3">
                          <p>13</p>
                        </div>
                      </div>
                      <div className="rating-graph grid grid-flow-col items-center grid-cols-12  text-sm">
                        <div className="ratting-text flex items-center gap-1 col-span-1 font-semibold">
                          <p>3</p>{" "}
                          <div>
                            <IoIosStar />
                          </div>
                        </div>

                        <div className="bar col-span-10 ">
                          <Progress value={23} className="h-3 w-full" />
                        </div>
                        <div className="customer-number col-span-1 font-semibold text-slate-400 px-3">
                          <p>1</p>
                        </div>
                      </div>
                      <div className="rating-graph grid grid-flow-col items-center grid-cols-12  text-sm">
                        <div className="ratting-text flex items-center gap-1 col-span-1 font-semibold">
                          <p>2</p>{" "}
                          <div>
                            <IoIosStar />
                          </div>
                        </div>

                        <div className="bar col-span-10 ">
                          <Progress value={0} className="h-3 w-full" />
                        </div>
                        <div className="customer-number col-span-1 font-semibold text-slate-400 px-3">
                          <p>0</p>
                        </div>
                      </div>
                      <div className="rating-graph grid grid-flow-col items-center grid-cols-12  text-sm">
                        <div className="ratting-text flex items-center gap-1 col-span-1 font-semibold">
                          <p>1</p>{" "}
                          <div>
                            <IoIosStar />
                          </div>
                        </div>

                        <div className="bar col-span-10 ">
                          <Progress value={0} className="h-3 w-full" />
                        </div>
                        <div className="customer-number col-span-1 font-semibold text-slate-400 px-3">
                          <p>0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="mt-5" value="brand_reviews">
                <div className="rating-container">
                  <div className="rating-wrapper mb-3">
                    <Card className="max-h-44 min-h-40 w-2/3 border ">
                      <CardHeader>
                        <CardTitle className="text-base">Jon Doe</CardTitle>
                        <CardDescription>
                          <div className="flex justify-between">
                            <Rate
                              style={{ color: "black" }}
                              disabled
                              defaultValue={2}
                            />

                            <div>Jan 7,2022</div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="truncate  p-5">
                        <div className="truncate ">
                          <p>Lorem Ipsum Sit Amet</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="rating-wrapper mb-3">
                    <Card className="max-h-44 min-h-40 w-2/3 border ">
                      <CardHeader>
                        <CardTitle className="text-base">Jon Doe</CardTitle>
                        <CardDescription>
                          <div className="flex justify-between">
                            <Rate
                              style={{ color: "black" }}
                              disabled
                              defaultValue={2}
                            />

                            <div>Jan 7,2022</div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="truncate  p-5">
                        <div className="truncate ">
                          <p>Lorem Ipsum Sit Amet</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="rating-wrapper mb-3">
                    <Card className="max-h-44 min-h-40 w-2/3 border ">
                      <CardHeader>
                        <CardTitle className="text-base">Jon Doe</CardTitle>
                        <CardDescription>
                          <div className="flex justify-between">
                            <Rate
                              style={{ color: "black" }}
                              disabled
                              defaultValue={2}
                            />

                            <div>Jan 7,2022</div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="truncate  p-5">
                        <div className="truncate ">
                          <p>Lorem Ipsum Sit Amet</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* <div className="flex justify-center col-span-1 ">
            <Button className="mt-10 px-10" variant={"outline"}>
              Rate{" "}
            </Button>
          </div> */}

          <div className="col-span-2 ">
            <div className="w-full">
              <div className="title">
                <h6 className="font-bold">Bought Together</h6>
              </div>
                  
              <div className="content-wrapper p-10 flex shadow-md rounded-lg mt-5  w-full">
                
                <div className=" w-1/2 ">
                  <Card className="border-0">
                    <CardContent className="p-5 ">
                      {coverImage && (
                        <img
                          className="max-w-28 m-auto"
                          src={base_url + coverImage}
                          alt="product-img"
                        />
                      )}
                    </CardContent>
                    <CardFooter>
                      <div className=" w-full px-3 leading-10">
                        <div className="title truncate  font-semibold">
                          {currentVariant.name}
                        </div>

                        <div className="flex w-full justify-start text-sm gap-2">
                          <div className="current-price flex gap-1">
                            <div className="currency font-bold">
                              {currentVariant.currency_code}
                            </div>
                            <div className="price-amount font-bold">
                              {currentVariant.price_amount}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
                <div className="add-icon-wrapper  flex items-center">
                  <FaPlus size={24} />
                </div>
                <div className=" w-1/2 ">
                  <Card className="border-0">
                    <CardContent className="p-5 ">
                      <img
                        src={base_url + coverImage}
                        className="max-w-28 h-28 w-32 m-auto bg-slate-200"
                        alt="product-img"
                      />
                    </CardContent>
                    <CardFooter>
                      <div className=" w-full px-3 leading-10">
                        <div className="title truncate  font-semibold">
                          {currentVariant.name}
                        </div>

                        <div className="flex w-full justify-start text-sm gap-2">
                          <div className="current-price flex gap-1">
                            <div className="currency font-bold">
                              {currentVariant.currency_code}
                            </div>
                            <div className="price-amount font-bold">
                              {currentVariant.price_amount}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div className="buy-btn ">
                <Button className="w-full">

                BUY 2 FOR AED 350
                </Button>
              </div>
            </div>

          </div>
        </section>
        <section className="recomendation">
          <div className="recom-title-container flex justify-center w-full font-bold text-xl">
            <div className="recom-title-wrapper w-fit">
              RECOMMENDED PRODUCTS
            </div>
          </div>
          <div className="recom-products-container w-full ">
            <div className="recom-wrapper">
              <Carousel className="w-full p-10 px-40">
                <CarouselContent className="-ml-1">
                  {productData &&
                    productData.recommended_products.map(
                      (product: any, index: number) => (
                        <CarouselItem
                          key={index}
                          className="pl-1  md:basis-1/2 lg:basis-1/4"
                        >
                          <div className="p-1">
                            <Card>
                              <CardContent className="p-5 ">
                                <img
                                  src={base_url + product.listing_image}
                                  alt="product-img"
                                />
                                <div className="w-full flex justify-center">
                                  <Button className="px-10 rounded-md">
                                    Add to Cart{" "}
                                    <span className="ml-3">
                                      <SlBag size={20} />{" "}
                                    </span>{" "}
                                  </Button>
                                </div>
                              </CardContent>
                              <CardFooter>
                                <div className=" w-full px-3">
                                  <div className="title truncate  font-semibold">
                                    {product.name}
                                  </div>

                                  <div className="flex text-sm gap-2">
                                    <div className="current-price flex gap-1">
                                      <div className="currency font-bold">
                                        {product.currency_code}
                                      </div>
                                      <div className="price-amount font-bold">
                                        {product.price_amount}
                                      </div>
                                    </div>

                                    <div className="original-price flex gap-1">
                                      <div className="currency font-bold">
                                        {product.currency_code}
                                      </div>
                                      <s>{product.original_amount}</s>
                                    </div>

                                    <div className="offer-wrapper min-w-fit w-fit text-green-500 font-semibold">
                                      <p>{product.discount_percentage}% OFF</p>
                                    </div>
                                  </div>
                                </div>
                              </CardFooter>
                            </Card>
                          </div>
                        </CarouselItem>
                      )
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
