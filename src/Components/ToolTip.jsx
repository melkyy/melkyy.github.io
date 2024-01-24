import React from 'react'
import { Badge } from 'flowbite-react';
import { Tooltip } from 'flowbite-react';

export default function ToolTip({ name, experience, color }) {
    return (
        <>
            <div class="group cursor-default text-center">
                <Tooltip content={experience} placement="top" >
                    <Badge color={color} size="md" className='ml-4'>
                        <p>
                            {name}
                        </p>
                    </Badge>
                </Tooltip>

            </div>
        </>
    )
}
