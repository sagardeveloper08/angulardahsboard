using Accounting._dataAL;
using Accounting._dataAL.Models;
using Accounting._dataAL.Servis;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace Accounting._json
{
   public class _Ayarlar
   {
        public IRepository<_tip> _ti = new Repository<_tip>(new AccouningDb());
        public IRepository<_qrup> _qr = new Repository<_qrup>(new AccouningDb());
        public IRepository<_bolme> _bol = new Repository<_bolme>(new AccouningDb());
        public IRepository<hesab> _he = new Repository<hesab>(new AccouningDb());
        public IRepository<_madde> _mad = new Repository<_madde>(new AccouningDb());
      
        public IRepository<shirket> _shi = new Repository<shirket>(new AccouningDb());
        public IRepository<mushteri> _mush = new Repository<mushteri>(new AccouningDb());

        public IRepository<_vahid> _va = new Repository<_vahid>(new AccouningDb());
      //  public IRepository<_malqrup> _mqr = new Repository<_malqrup>(new AccouningDb());
        public IRepository<_vergi> _ver = new Repository<_vergi>(new AccouningDb());
        string path = System.IO.Directory.GetCurrentDirectory().Substring(0, System.IO.Directory.GetCurrentDirectory().IndexOf("bin\\Debug")) + "_json\\";
        public void _jsonsvergi()
        {

          //  string f = "Oksigentərkibli funksional qrupu olan amin birləşmələri:– aminospirtlər, tərkibində bir tipdən artıq oksigentərkibli funksional qrup olmayan birləşmələrdən başqa; onların sadə və mürəkkəb efirləri; bu birləşmələrin duzları:– – monoetanolamin və onun duzları";
          //  string xx1 = f.Substring(0, f.IndexOf(":–"));
            using (StreamReader r = new StreamReader(path + "vergi.json"))
            {
                string json = r.ReadToEnd();
                List<verg> items = JsonConvert.DeserializeObject<List<verg>>(json);
                _vergi h = new _vergi();
                _vahid vh = new _vahid();
                //_malqrup mh = new _malqrup();
                string _f = "";
                foreach (var item in items)
                {
                    if (_va.GetAll().FirstOrDefault(k => k.vahidadi.Trim() == item.VAHID.Trim()) == null && item.VAHID.Trim() != _f)
                    {
                        _f = item.VAHID.Trim();
                        vh.vahidadi = item.VAHID.Trim();
                        _va.Insert(vh);
                    }
                }
                foreach (var item in items)
                {
                    h.vergikodu = item.CODE;                   
                    h.vergikodununadi = item.ADI.ToUpper().TrimEnd();
                    h.vId = _va.GetAll().FirstOrDefault(k => k.vahidadi == item.VAHID).vId;
                     _ver.Insert(h);
                   
                }
               // MessageBox.Show(kkk.ToString()+"ttt="+ttt.ToString(), "XƏBƏRDARLIQ");
            }
        }
        //public void _jsonvahid()
        //{
        //    using (StreamReader r = new StreamReader(path + "vergi.json"))//vahid.json
        //    {
        //        string json = r.ReadToEnd();
        //        _vahid vh = new _vahid();                
        //        List<verg> items = JsonConvert.DeserializeObject<List<verg>>(json);
        //        string _f="";
        //        foreach (var item in items)
        //        {
        //            //if("ƏD"== item.VAHID.ToUpper().Trim())
        //            //{
        //            //    var kk = _va.GetAll().FirstOrDefault(k => k.vahidadi.ToUpper() ==item.VAHID.Trim().ToUpper());
        //            //}
        //            if (_va.GetAll().FirstOrDefault(k => k.vahidadi.Trim().ToUpper() == item.VAHID.Trim().ToUpper()) == null && item.VAHID.Trim().ToUpper() != _f)
        //            {
        //                _f = item.VAHID.Trim().ToUpper();
        //                vh.vahidadi = item.VAHID.Trim().ToUpper();
        //                _va.Insert(vh);
        //            }
        //        }
        //        //List<_vahid> items = JsonConvert.DeserializeObject<List<_vahid>>(json);
        //        //foreach (var item in items)
        //        //{
        //        //    // h.vId = item.vId;
        //        //    h.vahidadi = item.vahidadi;
        //        //    _va.Insert(h);
        //        //}
        //    }
        //}
        //public void _jsonmalqrup()
        //{
        //    using (StreamReader r = new StreamReader(path + "vergi.json")) //malqrup.json
        //    {
        //        string json = r.ReadToEnd();
        //        _malqrup mh = new _malqrup();               
        //        List<verg> items = JsonConvert.DeserializeObject<List<verg>>(json);
        //        int kkk = 0;
        //        foreach (var item in items)
        //        {
        //            //--------------------
        //            if (item.ADI.IndexOf(":– ") > 0)
        //            {
        //                mh.malqrupuadi = item.ADI.Substring(0, item.ADI.IndexOf(":– ")).ToUpper();
        //            }
        //            else if (item.ADI.IndexOf("; ") > 0)
        //            {
        //                mh.malqrupuadi = item.ADI.Substring(0, item.ADI.IndexOf("; ")).ToUpper();
        //            }
        //            else
        //            {
        //                mh.malqrupuadi = item.ADI.ToUpper();
        //            }
        //            if (_mqr.GetAll().FirstOrDefault(k => k.malqrupuadi == mh.malqrupuadi) == null)
        //            {
        //                if (kkk < mh.malqrupuadi.Length)
        //                {
        //                    kkk = mh.malqrupuadi.Length;
        //                }
        //               // _mqr.Insert(mh);
        //            }

        //        }
        //        MessageBox.Show(kkk.ToString() , "XƏBƏRDARLIQ");
        //        //List<_malqrup> items = JsonConvert.DeserializeObject<List<_malqrup>>(json);
        //        //foreach (var item in items)
        //        //{                    
        //        //    h.malqrupuadi = item.malqrupuadi;
        //        //    _mqr.Insert(h);
        //        //}
        //    }
        //}
        public void _jsontip()
        {
            using (StreamReader r = new StreamReader(path + "tip.json"))
            {
                string json = r.ReadToEnd();
                List<_tip> items = JsonConvert.DeserializeObject<List<_tip>>(json);

                _tip h = new _tip();
                foreach (var item in items)
                {
                   // h.tipId = item.tipId;
                    h.tipname = item.tipname;
                    _ti.Insert(h);
                }

            }
        }
        public void _jsonshirket()
        {
            using (StreamReader r = new StreamReader(path + "shirket.json"))
            {
                string json = r.ReadToEnd();
                List<shirket> items = JsonConvert.DeserializeObject<List<shirket>>(json);

                shirket h = new shirket();
                foreach (var item in items)
                {                    
                    h.bankadi = item.bankadi;
                    h.bankvoen = item.bankvoen;                  
                    h.SWIFT = item.SWIFT;
                    h.bankkodu = item.bankkodu;
                    h.muxbirhesab = item.muxbirhesab;
                    h.aznhesab = item.aznhesab;
                    h.shiricrachi = item.shiricrachi;
                    h.shirvoen = item.shirvoen;
                    h.cavabdehshexs = item.cavabdehshexs;
                    h.email = item.email;
                    _shi.Insert(h);
                }

            }
        }
        public void _jsonsmush()
        {
            using (StreamReader r = new StreamReader(path + "mushteri.json"))
            {
                string json = r.ReadToEnd();
                List<mushteri> items = JsonConvert.DeserializeObject<List<mushteri>>(json);

                mushteri h = new mushteri();
                foreach (var item in items)
                {
                    h.firma = item.firma;
                    h.voen = item.voen;
                    h.muqavilenom = item.muqavilenom;
                    h.muqaviletar = item.muqaviletar;
                    h.valyuta = item.valyuta;
                    h.odemesherti = item.odemesherti;
                    h.temsilchi = item.temsilchi;
                    _mush.Insert(h);
                }

            }
        }
        public void _jsonqrup()
        {
            using (StreamReader r = new StreamReader(path+"qrup.json"))
            {
                string json = r.ReadToEnd();
                List<_qrup> items = JsonConvert.DeserializeObject<List<_qrup>>(json);

                _qrup h = new _qrup();
                foreach (var item in items)
                {
                    //h.qId = item.qId;
                    h.qrupname = item.qrupname;                   
                    _qr.Insert(h);
                }

            }
        }
        public void _jsonbolme()
        {
            using (StreamReader r = new StreamReader(path + "bolme.json"))
            {
                string json = r.ReadToEnd();
                List<_bolme> items = JsonConvert.DeserializeObject<List<_bolme>>(json);

                _bolme h = new _bolme();
                foreach (var item in items)
                {
                   // h.katId = item.katId;
                    h.bname = item.bname;
                    _bol.Insert(h);
                }
            }
        }
        public void _jsonhesab()
        {
            using (StreamReader r = new StreamReader(path+"hesablar.json"))
            {
                string json = r.ReadToEnd();
                var items = JsonConvert.DeserializeObject<List<hesb>>(json);
                _madde m = new _madde();
                //foreach (var item in items)
                //{
                //    if (item.mId.ToString() != ""&& item.mId.ToString() != "-")
                //    {
                //        m.mname = item.mId.ToString();
                //        _mad.Insert(m);
                //    }
                //}
                hesab h = new hesab();
                string kk = "";
                foreach (var item in items)
                {

                    if (item.mId.ToString() != "" && item.mId.ToString() != "-")
                    {
                        m.mname = item.mId.ToString();
                        _mad.Insert(m);
                    }

                    h.bId = item.bId;                   
                    h.hesname = item.hesname;
                    if(item.mId.ToString() != "" && item.mId.ToString() != "-") {  kk = item.mId.ToString(); }
                    h.mId =_mad.GetAll().FirstOrDefault(k=>k.mname==kk).mId;
                    h.hesnom = item.hesnom;
                    if (item.hesnom.ToString() == "" || item.hesnom.ToString() == "-"){ h.hesnom = kk; }
                    h.tipId = item.tipId;                    
                    _he.Insert(h);
                }

            }
        }
        
    }
    public class verg
    {
        public string CODE { get; set; }
        public string ADI { get; set; }
        public string VAHID { get; set; }
        public string STATE { get; set; }   
    }
    public class hesb
    {
        public int hesId { get; set; }
        public string hesnom { get; set; }
        public string hesname { get; set; }
        public int bId { get; set; }
        public string mId { get; set; }
        public int tipId { get; set; }

    }
}
