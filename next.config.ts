import type { NextConfig } from "next";

/**
 * Permanent redirects from the old Wix URLs, so existing links and
 * search-engine results keep working after the migration.
 */
const legacyRedirects = [
  ["/college-admissions", "/services/college-admissions"],
  ["/scholarships", "/services/scholarships"],
  ["/copy-of-college-admissions", "/services/education-counselling"],
  ["/css", "/services/css-pms"],
  ["/shandana-waheed", "/team/shandana-waheed"],
  ["/qudsia", "/team/qudsia-naz"],
  ["/wasay", "/team/abdul-wasay"],
  ["/charisma", "/team/charisma-wafee"],
  ["/sharukh-baloch", "/team/shahrukh-baloch"],
  ["/sarmad-hussain", "/team/sarmad-hussain"],
  ["/aashan", "/team/aashan-javed"],
  ["/items", "/resources"],
  ["/items/master-&-phd-samples", "/resources/master-phd-samples"],
  ["/items/deadlines", "/resources/deadlines"],
  ["/items/css-books-(recommended)", "/resources/css-books-recommended"],
  ["/book-online", "/consultation"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
