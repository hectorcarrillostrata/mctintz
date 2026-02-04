'use client'
import React,{ useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiHeart, FiEye, FiShoppingCart, } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { productData } from '../../data/shop'
import Quantity from './quantity'

export default function ShopIcon({id, list}) {
    let [show, setShow] = useState(false);
    let [data, setData] = useState();
    
    const showModal = (id) =>{
      setData(productData.find((item)=>item.id === parseInt(id)))
      setShow(true)
    }
  return (
    <>

        {list ? (
            <ul className="list-unstyled mb-0">
                <li className="list-inline-item">
                    <Link href="#" className="btn btn-icon btn-pills btn-soft-primary">
                        <FiHeart className="icons"/>
                    </Link>
                </li>
                <li className="mt-2 list-inline-item" style={{margin:"0 2px"}}>
                    <Link href="#" scroll={false} onClick={()=>showModal(id)} className="btn btn-icon btn-pills btn-soft-primary">
                        <FiEye className="icons"/>
                    </Link>
                </li>
                <li className="mt-2 list-inline-item">
                    <Link href="/shop-cart" className="btn btn-icon btn-pills btn-soft-primary">
                        <FiShoppingCart className="icons"/>
                    </Link>
                </li>
            </ul>
        ) : (
            <ul className="list-unstyled shop-icons">
                <li>
                <Link href="#" className="btn btn-icon btn-pills btn-soft-danger">
                    <FiHeart className="icons"/>
                </Link>
                </li>
                <li className="mt-2">
                <Link href="#" scroll={false} onClick={()=>showModal(id)} className="btn btn-icon btn-pills btn-soft-primary">
                    <FiEye className="icons"/>
                </Link>
                </li>
                <li className="mt-2">
                <Link href="/shop-cart" className="btn btn-icon btn-pills btn-soft-warning">
                    <FiShoppingCart className="icons"/>
                </Link>
                </li>
            </ul>
        )}

        

        <div className={`modal fade ${show ? 'd-block show' : 'd-none'}`} style={{backgroundColor:'#000000bf'}} >
            <div className="modal-dialog  modal-lg modal-dialog-centered">
                <div className="modal-content rounded shadow border-0">
                    <div className="modal-header border-bottom">
                        <h5 className="modal-title" id="productview-title">{data?.name}</h5>
                        <button type="button" className="btn btn-icon btn-close" onClick={()=>setShow(!show)}><MdClose className="fs-4 text-dark"/></button>
                    </div>
                    
                    <div className="modal-body p-4">
                        <div className="container-fluid px-0">
                            <div className="row">
                                <div className="col-lg-5">
                                {data?.image && 
                                    <Image src={data.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                                }
                                </div>

                                <div className="col-lg-7 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                    <h4 className="title">{data?.name}</h4>
                                    <h5 className="text-muted">{data?.descRate}<del className="text-danger ms-2">{data?.rate}</del> </h5>
                                    <ul className="list-unstyled text-warning h5">
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                    
                                    <h5 className="mt-4">Overview :</h5>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>

                                    <div className="row mt-4 pt-2">
                                        <div className="col-12">
                                            <div className="d-flex align-items-center">
                                                <h6 className="mb-0">Your Size:</h6>
                                                <ul className="list-unstyled mb-0 ms-3">
                                                    <li className="list-inline-item"><Link href="#" className="btn btn-icon btn-soft-primary">S</Link></li>
                                                    <li className="list-inline-item ms-1"><Link href="#" className="btn btn-icon btn-soft-primary">M</Link></li>
                                                    <li className="list-inline-item ms-1"><Link href="#" className="btn btn-icon btn-soft-primary">L</Link></li>
                                                    <li className="list-inline-item ms-1"><Link href="#" className="btn btn-icon btn-soft-primary">XL</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-12 mt-4">
                                            <div className="d-flex shop-list align-items-center">
                                                <h6 className="mb-0">Quantity:</h6>
                                                <div className="ms-3">
                                                <Quantity/>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        <Link href="#" className="btn btn-primary">Shop Now</Link>
                                        <Link href="/shop-cart" className="btn btn-soft-primary ms-2">Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
