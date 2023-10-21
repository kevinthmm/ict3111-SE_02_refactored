import {Button, Divider} from "antd";

export default function LoginSelect() {

    return (
        <main className="flex flex-col text-center">
            <p className={"text-character-secondary"}>Pick an account type</p>
            <Divider/>
            <Button type="primary" className={"mb-4"} href={"/login/admin"}>System Admin Login</Button>
            <Button type="primary" href={"/login/user"}>Regular User Login</Button>
        </main>
    )
}
