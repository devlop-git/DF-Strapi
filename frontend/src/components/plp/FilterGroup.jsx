"use client";

import { useState } from "react";

export default function FilterGroup({ filter }) {

  const [open,setOpen]=useState(true);

  return(

    <div className="border-b py-4">

      <button

        onClick={()=>setOpen(!open)}

        className="flex justify-between w-full cursor-pointer"

      >

        <span>

          {filter.title}

        </span>

        <span>

          {open ? "-" : "+"}

        </span>

      </button>

      {

        open && (

          <div className="mt-4 space-y-3">

            {

              filter?.options?.map((option)=>(

                <label

                  key={option.id}

                  className="flex gap-2"

                >

                  <input

                    type="checkbox"

                  />

                  {option.label}

                </label>

              ))

            }

          </div>

        )

      }

    </div>

  );

}