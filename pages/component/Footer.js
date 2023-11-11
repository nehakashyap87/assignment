import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;
const AssignmentFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                }}>
                <strong>&copy;
                    {currentYear}  All rights reserved. Managed by <a href="https://facebook.com/" target="_blank">Github</a>.</strong>
            </Footer>
        </>
    )
}
export default AssignmentFooter;