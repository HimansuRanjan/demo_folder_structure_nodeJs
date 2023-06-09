import { User } from "../models/user.js";

export const getAllUsers = async (req, res)=>{
    const users = await User.find({});
    res.json({
        success: true,
        users,
    })
};

export const register = async (req, res)=>{
    const {name, email, password} = req.body;

    await User.create({
        name,
        email,
        password,
    });
    res.json({
        success: true,
        message: "Registered successfully"
    });
};

export const specialUser = (req, res)=>{
    res.json({
        success: true,
        message: "Just Joking"
    });
};

export const userDetailsById = async (req, res) => {
    // const {id} = req.body;
    const {id} = req.params;

    const users = await User.findById(id);
    res.json({
        success:true,
        users,
    })
};

export const updateUser = async (req, res) => {
    // const {id} = req.body;
    const {id} = req.params;

    const users = await User.findById(id);
    res.json({
        success:true,
        message:"User Updated Successfully!"
    })
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    // await user.remove();

    res.json({
        success:true,
        message:"Deleted Successfully",
    })
};