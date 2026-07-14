const Tenant = require("../models/Tenant");

const createTenant = async (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  try {
    const { name, slug } = req.body;

    if (!name || !slug) {
      return res.status(400).json({
        success: false,
        message: "Name and slug are required",
      });
    }

    const existingTenant = await Tenant.findOne({ slug });

    if (existingTenant) {
      return res.status(400).json({
        success: false,
        message: "Tenant already exists",
      });
    }

    const tenant = await Tenant.create({
      name,
      slug,
    });

    res.status(201).json({
      success: true,
      tenant,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTenant,
};