import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import Connect from '../sections/pages/Connect';
import Main from '../sections/pages/Main';
import Registre from '../sections/pages/Registre';
import { useNavigate } from 'react-router-dom';
import {RiHomeLine} from "react-icons/ri"
 import {MdLocationOn} from "react-icons/md"
import {VscCircuitBoard} from "react-icons/vsc"
import {FiActivity} from "react-icons/fi"
import {HiLocationMarker} from "react-icons/hi"
export default function SideNav({openTab,setOpenTab}){
      const navigate = useNavigate();
        return (

          <ul className="flex flex-col items-center justify-center w-full" role="tablist">
              <li  className="cursor-pointer flex items-center justify-center text-2xl py-5"
               
              ><a   onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"> <RiHomeLine className="mr-3"/><span>Acceuil</span></a> 
              </li>
              <li className="cursor-pointer flex items-center justify-center text-2xl py-5">
                <a    onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist">  <HiLocationMarker  className="mr-3"/><span>  Cartes </span></a></li>
              
              <li onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"  className="cursor-pointer flex items-center justify-center text-2xl py-5"><VscCircuitBoard  className="mr-3"/><span>Circuits</span></li>
              <li onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"  className="cursor-pointer flex items-center justify-center text-2xl py-5"><FiActivity  className="mr-3"/><span>Activité</span></li>
          </ul>
        )
    
}