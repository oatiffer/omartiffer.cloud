import aws from "@assets/images/certs/aws-saa.png";
import azure from "@assets/images/certs/azure-fundamentals.png";
import cnip from "@assets/images/certs/comptia-cnip.png";
import netplus from "@assets/images/certs/comptia-netplus.png";
import serverplus from "@assets/images/certs/comptia-serverplus.png";
import f5 from "@assets/images/certs/f5-bigip.png";
import python from "@assets/images/certs/python-pcep.png";
import vmware from "@assets/images/certs/vmware-vcp.png";

interface ICert {
  name: string;
  img: ImageMetadata;
  link: string;
  valid: boolean;
  inProgress: boolean;
  status: "Current" | "Expired" | "In progress";
}

const certs: ICert[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    img: aws,
    link: "",
    valid: false,
    inProgress: true,
    status: "In progress",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    img: azure,
    link: "https://www.credly.com/badges/a41b8bc2-9679-4acf-ad5d-0ba231b56041/public_url",
    valid: true,
    inProgress: false,
    status: "Current",
  },
  {
    name: "VMware Certified Professional – Data Center Virtualization",
    img: vmware,
    link: "https://www.credly.com/badges/eea2bcfd-c210-4fe0-bb0a-d42c6d3856c7/public_url",
    valid: true,
    inProgress: false,
    status: "Current",
  },
  {
    name: "CompTIA Network Infrastructure Professional",
    img: cnip,
    link: "https://www.credly.com/badges/3ddf688b-a0ae-4ec6-bdea-7db65172fdc0/public_url",
    valid: false,
    inProgress: false,
    status: "Expired",
  },
  {
    name: "PCEP - Certified Entry-Level Python Programmer",
    img: python,
    link: "https://www.credly.com/badges/4cb506e6-b896-4c51-af3d-f8cd9349e001/public_url",
    valid: true,
    inProgress: false,
    status: "Current",
  },
  {
    name: "CompTIA Server+",
    img: serverplus,
    link: "https://www.credly.com/badges/9bf7d681-4444-4c8b-8a43-49d3b6b5d781/public_url",
    valid: true,
    inProgress: false,
    status: "Current",
  },
  {
    name: "CompTIA Network+",
    img: netplus,
    link: "https://www.credly.com/badges/a78e7244-9ddd-49ee-a5d2-38cb0e695723/public_url",
    valid: false,
    inProgress: false,
    status: "Expired",
  },
  {
    name: "F5 Certified Administrator, BIG-IP",
    img: f5,
    link: "https://www.credly.com/badges/d39200e3-1f06-4b3a-b902-92a40a74e727/public_url",
    valid: false,
    inProgress: false,
    status: "Expired",
  },
];

export default certs;
